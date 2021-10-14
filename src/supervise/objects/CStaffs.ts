import { makeObservable, observable } from "mobx";
import { CSupervise } from "supervise";
import { CObjects } from "./CObjects";
import { VStaffs } from "./VStaffs";

export class CStaffs extends CObjects {
    list: any[];

    get baseList(): any[] {return this.list}

    constructor(owner: CSupervise) {
        super(owner);
        makeObservable(this, {
            list: observable.shallow,
        });
    }

    protected get caption(): string {return '员工'}

    protected async internalLoadList(): Promise<void> {
        let to = new Date();
        let from = new Date(to);
        from.setDate(from.getDate() - 7);
        let ret = await this.uqs.JkMe.GetStaffs.query({
            from,
            to,
            timeZone: 8,
        });
        this.list = ret.ret;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VStaffs);
    }
}
