import { action, makeObservable, observable, runInAction } from "mobx";
import { env } from "tonva-react";
import { CApp, CUqBase } from "uq-app";
import { Item, ObjectPostItem, Post
    , ResultGetObjectItemPeriodSum, ResultGetUserObjectItemPeriodSum, ReturnGetObjectItemHistoryRet, ReturnGetObjectItemPeriodHistoryRet
    , ReturnGetObjectItemPeriodSumRet } from "uq-app/uqs/JkMe";
import { BizOpDetail } from "./bizOpDetail";
import { PostPeriodSum, Period, ItemPeriodSum, EnumPeriod, createPeriod } from "./period";
import { VBizOpDetail } from "./VBizOpDetail";
import { VPostItemHistory } from "./VPostItemHistory";
import { VDayPostItemHistory, VMonthPostItemHistory } from "./VPeriodPostItemHistory";
import { VPeriodSum } from "./VPortal";

export class CPortal extends  CUqBase {
	bizOpDetail: BizOpDetail;

    period: Period;
    //postPeriodSumColl: {[post in keyof typeof Post]: PostPeriodSum};
    //postPeriodSumList: PostPeriodSum[];
    list: any[];
    objectPostItem: ObjectPostItem;
    itemPeriodSum: ItemPeriodSum;
    history: ReturnGetObjectItemHistoryRet[];
    periodHistory: ReturnGetObjectItemPeriodHistoryRet[];

    constructor(cApp: CApp) {
		super(cApp);
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
        this.period = createPeriod(periodType);
    }

    async setPeriod(periodType: EnumPeriod) {
        this.internalSetPeriod(periodType);
        await this.load();
    }

    protected async GetPeriodSum(from: Date, to: Date):Promise<{ret:any[]}> {
        let ret = await this.uqs.JkMe.GetUserObjectItemPeriodSum.query({
			from,
			to,
            timeZone: env.timeZone,
		});
        return ret;
    }

    async load() {
        let {from, to} = this.period;
        let ret = await this.GetPeriodSum(from, to);
        let arr: ReturnGetObjectItemPeriodSumRet[] = ret.ret;
        let postPeriodSumColl = {} as any;
        let postPeriodSumList:PostPeriodSum[] = [];
        for (let n of arr) {
            let post = Number(n.post);
            let item = Number(n.item);
            let ips:ItemPeriodSum = {...n, post, item};
            let postPeriodSum = postPeriodSumColl[post];
            if (postPeriodSum === undefined) {
                let itemColl: {[item in keyof typeof Item]: ItemPeriodSum} = {} as any;
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
        let {id: objectPostItem} = ips;
      
        let {from, to} = this.period;
        if (fromDate) from = fromDate;
        if (toDate) to = toDate;
        let {timeZone} = env;
		let ret = await this.uqs.JkMe.GetObjectItemHistory.query({
			objectPostItem, 
			from,
			to,
            timeZone,
		});
        runInAction(() => {
            this.history = ret.ret;
        });
	}

    private async loadPeriodPostItemHistory(ips: ItemPeriodSum, fromDate: Date, toDate: Date, sumPeriod: EnumPeriod) {
        if (ips) {
            this.itemPeriodSum = ips;
        }
        else {
            ips = this.itemPeriodSum;
        }
        let {id: objectPostItem} = ips;
        let {from, to} = this.period;
        if (fromDate) from = fromDate;
        if (toDate) to = toDate;
        let {timeZone} = env;
		let ret = await this.uqs.JkMe.GetObjectItemPeriodHistory.query({
			objectPostItem, 
			from,
			to,
			period: sumPeriod,
            timeZone,
		});
        runInAction(() => {
            this.periodHistory = ret.ret;
        });
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

	async showPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.loadPostItemHistory(ips, from, to);
		this.openVPage(VPostItemHistory);
	}

	async showDayPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.loadPeriodPostItemHistory(ips, from, to, EnumPeriod.day);
		this.openVPage(VDayPostItemHistory);
	}

	async showMonthPostItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.loadPeriodPostItemHistory(ips, from, to, EnumPeriod.month);
		this.openVPage(VMonthPostItemHistory);
	}

    renderVPortal() {
        return this.renderView(VPeriodSum as any);
    }
}
