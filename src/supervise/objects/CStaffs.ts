import { makeObservable, observable } from "mobx";
import { CSupervise } from "supervise";
import { ObjectPostItem } from "uq-app/uqs/JkMe";
import { CObjects } from "./CObjects";
import { VStaffs } from "./VStaffs";

export class CStaffs extends CObjects {
    list: any[];
    sumThisMonth: number;
    sumLastMonth: number

    get baseList(): any[] {return this.list}

    constructor(owner: CSupervise) {
        super(owner);
        makeObservable(this, {
            list: observable.shallow,
        });
    }

    protected get caption(): string {return '员工'}

    protected async internalLoadList(): Promise<void> {
        let ret = await this.uqs.JkMe.GetStaffs.query({
            timeZone: 8,
        });
        this.list = ret.ret;
        let sumThisMonth:number = 0;
        let sumLastMonth:number = 0;
        for (let r of this.list) {
            let {amountThisMonth, amountLastMonth} = r;
            sumThisMonth += amountThisMonth??0;
            sumLastMonth += amountLastMonth??0;
        }
        this.sumThisMonth = sumThisMonth;
        this.sumLastMonth = sumLastMonth;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VStaffs);
    }

    async showObjectPortal(objectPostItemId: number, pageTop: JSX.Element) {
        let cObjectPortal = this.cApp.newCObjectPortal(objectPostItemId, pageTop);
        cObjectPortal.showObjectPortal();
    }
}
