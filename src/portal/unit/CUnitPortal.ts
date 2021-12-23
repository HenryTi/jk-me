import { runInAction } from "mobx";
import { EnumPeriod, ItemPeriodSum } from "portal";
import { CApp } from "uq-app";
import { Item, ResultGetItemPeriodSum, ReturnGetItemPeriodSumRet } from "uq-app/uqs/JkMe";
import { CPortal } from '../CPortal';
import { VEachItemHistory } from "./VItemHistory";
import { VUnitPortal } from "./VUnitPortal";

export class CUnitPortal extends CPortal {
    item: Item;
    constructor(cApp: CApp) {
        super(cApp);
        this.internalSetPeriod(EnumPeriod.month);
    }

    protected async GetPeriodSum(from: Date, to: Date): Promise<ResultGetItemPeriodSum> {
        let ret = await this.uqs.JkMe.GetItemPeriodSum.query({
            date: from,
            days: Math.round(Math.abs((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000))),
        });
        return ret;
    }
    async load() {
        let { from, to } = this.period;
        let ret = await this.GetPeriodSum(from, to);
        runInAction(() => {
            this.list = ret.ret;
        });
    }

    renderVPortal() {
        return this.renderView(VUnitPortal as any);
    }

    async showItemHistory(row: ReturnGetItemPeriodSumRet) {
        let { item, opi, value } = row;
        let { type, from, to } = this.period;
        let ips: ItemPeriodSum = {
            id: opi,
            item,
            object: 0,
            post: 0,
            value,
        }
        await this.showOpiHistory(ips);
        /*
        switch (type) {
            case EnumPeriod.day:
                this.showEachItemHistory(item, from, to);
                break;
            case EnumPeriod.month:
            case EnumPeriod.week:
                this.showDayPostItemHistory(ips, from, to);
                break;
            case EnumPeriod.year:
                this.showMonthPostItemHistory(ips, from, to);
                break;
        }
        */
    }
    /*
        async showEachItemHistory(item: Item, from: Date, to: Date) {
            this.item = item;
            await this.loadItemHistory(from, to);
            this.openVPage(VEachItemHistory);
        }
    
        private async loadItemHistory(from: Date, to: Date) {
            //let ret = await this.uqs.JkMe.GetItemPeriodHistory.query({ item, from, to });
        }
    */
}
