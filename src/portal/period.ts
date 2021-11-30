import { action, computed, makeObservable, observable } from "mobx";
import { env } from "tonwa-core";
import { Item, Post, ReturnGetObjectItemPeriodSumRet } from "uq-app/uqs/JkMe";

export enum EnumPeriod { day = 0, month = 1, week = 2, year = 3 }

export interface ItemPeriodSum extends ReturnGetObjectItemPeriodSumRet {
    id: number;
    object: number;
    post: Post;
    item: Item;
    value: number;
}

export interface PostPeriodSum {
    post: Post;
    itemColl: { [item in keyof typeof Item]: ItemPeriodSum };
    itemList: ItemPeriodSum[];
}

export abstract class Period {
    private timezone: number;
    constructor(timezone: number) {
        this.timezone = timezone;
        this.to = this.newDate();
        this.from = new Date(this.to);
        this.init();
        this.initObservable();
    }
    private newDate(): Date {
        let ret = new Date();
        ret.setHours(ret.getHours() - env.timeZone + this.timezone)
        ret.setHours(0, 0, 0, 0);
        return ret;
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
        let date = this.newDate();
        return this.to <= date;
    }
    abstract render(): string;
}

const weekday = '日一二三四五六';
class DayPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.day;
        this.to.setDate(this.from.getDate() + 1);
    }
    prev(): void {
        this.to = new Date(this.to.setDate(this.to.getDate() - 1));
        this.from = new Date(this.from.setDate(this.from.getDate() - 1));
    }
    next(): void {
        this.to = new Date(this.to.setDate(this.to.getDate() + 1));
        this.from = new Date(this.from.setDate(this.from.getDate() + 1));
    }
    render(): string {
        let year = new Date().getFullYear();
        let y = this.from.getFullYear();
        let m = this.from.getMonth();
        let d = this.from.getDate();
        let dw = this.from.getDay();
        return (y === year ? '' : `${y}年`) + `${m + 1}月${d}日 星期${weekday[dw]}`;
    }
}

class WeekPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.week;
        let day = this.to.getDay();
        let diff = this.to.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
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
    render(): string {
        let year = new Date().getFullYear();
        let yf = this.from.getFullYear();
        let mf = this.from.getMonth();
        let df = this.from.getDate();
        let mt = this.to.getMonth();
        let dt = this.to.getDate();
        return (yf === year ? '' : `${yf}年`) + `${mf + 1}月${df}日 - `
            + (mt === mf ? '' : `${mt}月`) + `${dt}日`;
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
    render(): string {
        let year = new Date().getFullYear();
        let yf = this.from.getFullYear();
        return `${year === yf ? '' : year + '年'}${this.from.getMonth() + 1}月`;
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
    render(): string { return `${this.from.getFullYear()}年` }
}

export function createPeriod(periodType: EnumPeriod, timezone: number): Period {
    let period: Period;
    switch (periodType) {
        case EnumPeriod.day: period = new DayPeriod(timezone); break;
        case EnumPeriod.week: period = new WeekPeriod(timezone); break;
        case EnumPeriod.month: period = new MonthPeriod(timezone); break;
        case EnumPeriod.year: period = new YearPeriod(timezone); break;
    }
    return period;
}