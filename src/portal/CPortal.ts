import { action, makeObservable, observable, runInAction } from "mobx";
import { CUqBase } from "uq-app";
import {
    Item, Post, ReturnGetObjectItemHistoryRet, ReturnGetObjectItemPeriodHistoryRet
    , ReturnGetObjectItemPeriodSumRet,
    ReturnGetSuperviseObjectsRet
} from "uq-app/uqs/JkMe";
import { BizOpDetail } from "./bizOpDetail";
import { PostPeriodSum, Period, ItemPeriodSum, EnumPeriod, createPeriod } from "./period";
import { VBizOpDetail } from "./VBizOpDetail";
import { VPostItemHistory } from "./VPostItemHistory";
import { VDayPostItemHistory, VMonthPostItemHistory } from "./VPeriodPostItemHistory";
import { VPeriodSum } from "./VPortal";
import { VSuperviseObjects } from "./VSuperviseObjects";

export class CPortal extends CUqBase {
    bizOpDetail: BizOpDetail;

    period: Period;
    list: any[];
    // objectPostItem: ObjectPostItem;
    itemPeriodSum: ItemPeriodSum;
    history: ReturnGetObjectItemHistoryRet[];
    periodHistory: ReturnGetObjectItemPeriodHistoryRet[];
    superviseObjects: ReturnGetSuperviseObjectsRet[];

    init(...param: any[]): void {
        makeObservable(this, {
            period: observable,
            history: observable.shallow,
            periodHistory: observable.shallow,
            //postPeriodSumColl: observable.ref,
            //postPeriodSumList: observable.shallow,
            list: observable.shallow,
            internalSetPeriod: action,
        });
        this.internalSetPeriod(EnumPeriod.day);
    }

    protected async internalStart() {
    }

    internalSetPeriod(periodType: EnumPeriod) {
        let { unitTimezone, unitBizMonth, unitBizDate } = this.cApp;
        this.period = createPeriod(periodType, unitTimezone, unitBizMonth, unitBizDate);
    }

    async setPeriod(periodType: EnumPeriod) {
        this.internalSetPeriod(periodType);
        await this.load();
    }

    protected async GetPeriodSum(from: Date, to: Date): Promise<{ ret: any[] }> {
        let ret = await this.uqs.JkMe.GetUserObjectItemPeriodSum.query({
            from,
            to,
        });
        return ret;
    }

    async load() {
        let { from, to } = this.period;
        let ret = await this.GetPeriodSum(from, to);
        let arr: ReturnGetObjectItemPeriodSumRet[] = ret.ret;
        let postPeriodSumColl = {} as any;
        let postPeriodSumList: PostPeriodSum[] = [];
        for (let n of arr) {
            let post = Number(n.post);
            let item = Number(n.item);
            let ips: ItemPeriodSum = { ...n, post, item };
            let postPeriodSum = postPeriodSumColl[post];
            if (postPeriodSum === undefined) {
                let itemColl: { [item in keyof typeof Item]: ItemPeriodSum } = {} as any;
                postPeriodSumColl[post] = postPeriodSum = {
                    post: post,
                    itemColl,
                    itemList: [],
                }
                postPeriodSumList.push(postPeriodSum);
            }
            postPeriodSum.itemColl[item] = ips;
            postPeriodSum.itemList.push(ips);
        }
        runInAction(() => {
            //this.postPeriodSumColl = postPeriodSumColl;
            //this.postPeriodSumList = postPeriodSumList;
            this.list = postPeriodSumList;
        });
    }

    private async loadPostItemHistory(ips: ItemPeriodSum, fromDate: Date, toDate: Date) {
        if (!ips) {
            ips = this.itemPeriodSum;
        }
        else {
            this.itemPeriodSum = ips;
        }
        let { id: objectPostItem, post, item } = ips;
        let { from, to } = this.period;
        if (fromDate) from = fromDate;
        if (toDate) to = toDate;
        let retList: ReturnGetObjectItemHistoryRet[];
        if (post === Post.sys) {
            let ret = await this.uqs.JkMe.GetItemHistory.page({
                item,
                from,
                to,
            }, undefined, 10000);
            retList = ret.$page;
        }
        else {
            let ret = await this.uqs.JkMe.GetObjectItemHistory.query({
                objectPostItem,
                from,
                to,
            });
            retList = ret.ret;
        }
        runInAction(() => {
            this.history = retList;
        });
    }

    private async loadPeriodPostItemHistory(ips: ItemPeriodSum, fromDate: Date, toDate: Date, bizDate: number/* sumPeriod: EnumPeriod*/) {
        if (ips) {
            this.itemPeriodSum = ips;
        }
        else {
            ips = this.itemPeriodSum;
        }
        let { id: objectPostItem } = ips;
        let { from, to } = this.period;
        if (fromDate) from = fromDate;
        if (toDate) to = toDate;
        let ret = await this.uqs.JkMe.GetObjectItemPeriodHistory.query({
            objectPostItem,
            from,
            to,
            period: bizDate,
        });
        this.runInAction(() => {
            this.periodHistory = ret.ret;
        });
    }

    private async loadSuperviseObjects(ips: ItemPeriodSum, fromDate: Date, toDate: Date) {
        if (ips) {
            this.itemPeriodSum = ips;
        }
        else {
            ips = this.itemPeriodSum;
        }
        let { id: objectPostItem } = ips;
        let { from, to } = this.period;
        if (fromDate) from = fromDate;
        if (toDate) to = toDate;
        let ret = await this.uqs.JkMe.GetSuperviseObjects.query({ from, to });
        this.superviseObjects = ret.ret;
    }

    prev = async () => {
        this.period.prev();
        await this.load();
    }

    next = async () => {
        if (this.period.hasNext === false) return;
        this.period.next();
        await this.load();
    }

    async showBizOpDetail(item: ReturnGetObjectItemHistoryRet) {
        this.bizOpDetail = new BizOpDetail(this.uqs, item);
        this.openVPage(VBizOpDetail);
    }

    showOpiHistory = async (ips: ItemPeriodSum) => {
        switch (this.period.type) {
            case EnumPeriod.day:
                this.showPostItemHistory(ips, undefined, undefined);
                break;
            case EnumPeriod.month:
            case EnumPeriod.week:
                this.showDayPostItemHistory(ips, undefined, undefined);
                break;
            case EnumPeriod.year:
                this.showMonthPostItemHistory(ips, undefined, undefined);
                break;
        }
    }

    async showPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
        switch (ips.post) {
            case Post.staffSupervisor:
                await this.loadSuperviseObjects(ips, from, to);
                this.openVPage(VSuperviseObjects);
                break;
            default:
                await this.loadPostItemHistory(ips, from, to);
                this.openVPage(VPostItemHistory);
                break;
        }
    }

    async showDayPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
        await this.loadPeriodPostItemHistory(ips, from, to, 0 /*EnumPeriod.day*/);
        this.openVPage(VDayPostItemHistory);
    }

    async showMonthPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
        await this.loadPeriodPostItemHistory(ips, from, to, this.cApp.unitBizDate/* EnumPeriod.month*/);
        this.openVPage(VMonthPostItemHistory);
    }

    renderVPortal() {
        return this.renderView(VPeriodSum as any);
    }
}
