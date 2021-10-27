import { CSupervise } from "../CSupervise";
import { CApp, CUqSub, UQs } from "uq-app";
import { computed, makeObservable } from "mobx";

export abstract class CObjects extends CUqSub<CApp, UQs, CSupervise> {
    abstract get baseList(): any[];

    constructor(owner: CSupervise) {
        super(owner);
        makeObservable(this, {
            baseList: computed,
        });
    }

    protected async internalStart() {        
    }
    header() {return this.caption + '销售额列表'}
    protected abstract get caption(): string;

    protected async loadList(): Promise<void> {
        // if (this.baseList) return;
        await this.internalLoadList();
    }
    protected abstract internalLoadList(): Promise<void>;
    async loadAndShowList(): Promise<void> {
        await this.loadList();
        this.showList();
    }
    protected abstract showList(): Promise<void>;
}
