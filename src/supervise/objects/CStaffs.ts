import { makeObservable, observable } from "mobx";
import { CSupervise } from "supervise";
import { Item } from "uq-app/uqs/JkMe";
import { CObjects } from "./CObjects";
import { VStaffs } from "./VStaffs";

export interface MonthValues {
	opi: number;
    item: Item;
    dThis: number;
    mThis: number;
    mLast: number;
}

export interface ItemMonthValues {
    [Item.orderAmount]?: MonthValues;
    [Item.couponFee]?: MonthValues;
    [Item.profitFee]?: MonthValues;
}

export interface StaffRow {
	obj: number;
	staff: number;
    monthValuesArr: MonthValues[];
}

export class CStaffs extends CObjects {
    list: StaffRow[];
    sum: {item: Item; dThis: number; mThis: number; mLast: number; }[] = [];

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
        });
        let list = ret.ret;
        let coll:{[staff:number]: StaffRow} = {};
        let arr: StaffRow[] = [];
        let sum: {[key in Item]?: {item: Item; dThis: number; mThis: number; mLast: number; }} = {};
        for (let r of list) {
            let {opi, item, obj, staff, valueToday, valueThisMonth, valueLastMonth} = r;
            let staffRow = coll[staff];
            if (staffRow === undefined) {
                coll[staff] = staffRow = {
                    obj,
                    staff,
                    monthValuesArr: [],
                };
                arr.push(staffRow);
            }
            let {monthValuesArr} = staffRow;
            monthValuesArr.push({
                opi,
                item,
                dThis: valueToday,
                mThis: valueThisMonth,
                mLast: valueLastMonth,
            });
            let sumItem = sum[item as Item];
            if (sumItem === undefined) {
                sumItem = {
                    item,
                    dThis: 0,
                    mThis: 0,
                    mLast: 0,
                };
                sum[item as Item] = sumItem;
            }
            sumItem.dThis += (valueToday ?? 0);
            sumItem.mThis += (valueThisMonth ?? 0);
            sumItem.mLast += (valueLastMonth ?? 0);
        }
        this.sum.splice(0, this.sum.length);
        for (let i in sum) this.sum.push(sum[Number(i) as Item]);
        this.list = arr;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VStaffs);
    }

    async showObjectPortal(object: number, pageTop: JSX.Element) {
        let cObjectPortal = this.cApp.newCObjectPortal(object, pageTop);
        cObjectPortal.showObjectPortal();
    }
}
