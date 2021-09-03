import { action, computed, makeObservable, observable } from "mobx";
import { UQs } from "uq-app";
import { Item, PersonPostItem, Post, ReturnUserItemHistoryRet, ReturnUserItemPeriodSumRet } from "uq-app/uqs/JkMe";

export enum EnumPeriod {day = 0, month = 1, week = 2, year = 3}

export interface ItemPeriodSum extends ReturnUserItemPeriodSumRet {
	id: number;
	person: number;
	post: Post;
	item: Item;
	sumValue: number;
}

export interface PostPeriodSum {
    post: Post;
    itemColl: {[item in keyof typeof Item]: ItemPeriodSum};
    itemList: ItemPeriodSum[];
}

abstract class Period {
    constructor() {
        this.to = new Date();
        this.to.setHours(0, 0, 0, 0);
        this.from = new Date(this.to);
        this.init();
        this.initObservable();
    }
    protected initObservable() {
        makeObservable(this, {
            from: observable,
            to: observable,
            prev: action,
            next: action,
            hasNext: computed,
        });
    }
    type: EnumPeriod;
	from: Date;
	to: Date;
    abstract init(): void;
    abstract prev(): void;
    abstract next(): void;
    get hasNext(): boolean {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return this.to < date;
    }
}

class DayPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.day;
        this.from.setDate(this.to.getDate()-1);
    }
    prev(): void {
        this.to = new Date(this.to.setDate(this.to.getDate()-1));
        this.from = new Date(this.from.setDate(this.from.getDate()-1));
    }
    next(): void {
        this.to = new Date(this.to.setDate(this.to.getDate()+1));
        this.from = new Date(this.from.setDate(this.from.getDate()+1));
    }
}

class WeekPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.week;
        let day = this.to.getDay();
        let diff = this.to.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        this.from = new Date(this.to.setDate(diff));
        this.to.setDate(this.to.getDate() + 7);
    }
    prev(): void {
        this.from = new Date(this.from.setDate(this.from.getDate() - 7));
        this.to = new Date(this.to.setDate(this.to.getDate() - 7));
    }
    next(): void {
        this.from = new Date(this.from.setDate(this.from.getDate() + 7));
        this.to = new Date(this.to.setDate(this.to.getDate() + 7));
    }
}

class MonthPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.month;
        this.from = new Date(this.to.getFullYear(), this.to.getMonth(), 1);
        this.to = new Date(this.to.getFullYear(), this.to.getMonth() + 1, 1);
    }
    prev(): void {
        this.from = new Date(this.from.setMonth(this.from.getMonth() - 1));
        this.to = new Date(this.to.setMonth(this.to.getMonth() - 1));
    }
    next(): void {
        this.from = new Date(this.from.setMonth(this.from.getMonth() + 1));
        this.to = new Date(this.to.setMonth(this.to.getMonth() + 1));
    }
}

class YearPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.year;
        this.from = new Date(this.to.getFullYear(), 0, 1);
        this.to = new Date(this.to.getFullYear() + 1, 0, 1);
    }
    prev(): void {
        this.from = new Date(this.from.setFullYear(this.from.getFullYear() - 1));
        this.to = new Date(this.to.setFullYear(this.to.getFullYear() - 1));
    }
    next(): void {
        this.from = new Date(this.from.setFullYear(this.from.getFullYear() + 1));
        this.to = new Date(this.to.setFullYear(this.to.getFullYear() + 1));
    }
}

export class PeriodSum {
    private uqs: UQs;
    period: Period;
    postPeriodSumColl: {[post in keyof typeof Post]: PostPeriodSum};
    postPeriodSumList: PostPeriodSum[];
    personPostItem: PersonPostItem;
    itemPeriodSum: ItemPeriodSum;
    history: ReturnUserItemHistoryRet[];

    constructor(uqs: UQs) {
        this.uqs = uqs;
        makeObservable(this, {
            period: observable,
            history: observable.shallow,
            postPeriodSumColl: observable.ref,
            postPeriodSumList: observable.shallow,
            internalSetPeriod: action,
        });
        this.internalSetPeriod(EnumPeriod.day);
    }

    internalSetPeriod(periodType: EnumPeriod) {
        let period: Period;
        switch (periodType) {
            case EnumPeriod.day: period = new DayPeriod(); break;
            case EnumPeriod.week: period = new WeekPeriod(); break;
            case EnumPeriod.month: period = new MonthPeriod(); break;
            case EnumPeriod.year: period = new YearPeriod(); break;
        }
        this.period = period;
    }

    async setPeriod(periodType: EnumPeriod) {
        this.internalSetPeriod(periodType);
        await this.load();
    }

    async load() {
        let {from, to} = this.period;
        let ret = await this.uqs.JkMe.UserItemPeriodSum.query({
			from,
			to,
		});
        let arr: ReturnUserItemPeriodSumRet[] = ret.ret;
        this.postPeriodSumColl = {} as any;
        this.postPeriodSumList = [];
        for (let n of arr) {
            let post = Number(n.post);
            let item = Number(n.item);
            let ips:ItemPeriodSum = {...n, post, item};
            let postPeriodSum = this.postPeriodSumColl[post];
            if (postPeriodSum === undefined) {
                let itemColl: {[item in keyof typeof Item]: ItemPeriodSum} = {} as any;
                this.postPeriodSumColl[post] = postPeriodSum = {
                    post: post,
                    itemColl,
                    itemList: [],
                }
                this.postPeriodSumList.push(postPeriodSum);
            }
            postPeriodSum.itemColl[item] = ips;
            postPeriodSum.itemList.push(ips);
        }
    }

    async loadHistory(ips: ItemPeriodSum, sumPeriod: EnumPeriod) {
        this.itemPeriodSum = ips;
        let {id: personPostItem} = ips;
        let {from, to} = this.period;
		let ret = await this.uqs.JkMe.UserItemHistory.query({
			personPostItem, 
			from,
			to,
			period: sumPeriod,
		});
        this.history = ret.ret;
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
}
