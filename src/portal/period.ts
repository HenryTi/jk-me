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
    protected readonly timezone: number;
    protected readonly unitBizMonth: number;
    protected readonly unitBizDate: number;
    constructor(timezone: number, unitBizMonth: number, unitBizDate: number) {
        this.timezone = timezone;
        this.unitBizMonth = unitBizMonth;
        this.unitBizDate = unitBizDate;
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
    caption: string;
    from: Date;
    to: Date;
    abstract init(): void;
    abstract prev(): void;
    abstract next(): void;
    get hasNext(): boolean {
        let date = this.newDate();
        return this.to <= date;
    }
    abstract setCaption(): void;
    render(): string {
        return this.caption;
    }
}

const weekday = '日一二三四五六';
class DayPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.day;
        this.to.setDate(this.from.getDate() + 1);
        this.setCaption();
    }
    prev(): void {
        this.to = new Date(this.to.setDate(this.to.getDate() - 1));
        this.from = new Date(this.from.setDate(this.from.getDate() - 1));
        this.setCaption();
    }
    next(): void {
        this.to = new Date(this.to.setDate(this.to.getDate() + 1));
        this.from = new Date(this.from.setDate(this.from.getDate() + 1));
        this.setCaption();
    }
    setCaption(): void {
        let year = new Date().getFullYear();
        let y = this.from.getFullYear();
        let m = this.from.getMonth();
        let d = this.from.getDate();
        let dw = this.from.getDay();
        this.caption = (y === year ? '' : `${y}年`) + `${m + 1}月${d}日 星期${weekday[dw]}`
    }
}

class WeekPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.week;
        let day = this.to.getDay();
        let diff = this.to.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        this.from = new Date(this.to.setDate(diff));
        this.to.setDate(this.to.getDate() + 7);
        this.setCaption();
    }
    prev(): void {
        this.from = new Date(this.from.setDate(this.from.getDate() - 7));
        this.to = new Date(this.to.setDate(this.to.getDate() - 7));
        this.setCaption();
    }
    next(): void {
        this.from = new Date(this.from.setDate(this.from.getDate() + 7));
        this.to = new Date(this.to.setDate(this.to.getDate() + 7));
        this.setCaption();
    }
    setCaption(): void {
        let year = new Date().getFullYear();
        let yf = this.from.getFullYear();
        let mf = this.from.getMonth();
        let df = this.from.getDate();
        let mt = this.to.getMonth();
        let dt = this.to.getDate();
        this.caption = (yf === year ? '' : `${yf}年`) + `${mf + 1}月${df}日 - `
            + (mt === mf ? '' : `${mt}月`) + `${dt}日`;
    }
}

class MonthPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.month;
        let year = this.to.getFullYear();
        let month = this.to.getMonth();
        let date = this.to.getDate();
        if (date < this.unitBizDate) {
            month--;
            if (month < 0) year--;
        }
        this.from = new Date(year, month, this.unitBizDate);
        this.to = new Date(this.from);
        this.to.setMonth(this.to.getMonth() + 1);
        this.setCaption();
    }
    prev(): void {
        this.from = new Date(this.from.setMonth(this.from.getMonth() - 1));
        this.to = new Date(this.to.setMonth(this.to.getMonth() - 1));
        this.setCaption();
    }
    next(): void {
        this.from = new Date(this.from.setMonth(this.from.getMonth() + 1));
        this.to = new Date(this.to.setMonth(this.to.getMonth() + 1));
        this.setCaption();
    }
    setCaption(): void {
        let thisYear = new Date().getFullYear();
        let yf = this.from.getFullYear();
        this.caption = `${thisYear === yf ? '' : thisYear + '年'}${this.from.getMonth() + 1}月`;
    }
}

class YearPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.year;
        let year = this.to.getFullYear();
        let month = this.to.getMonth();
        let date = this.to.getDate();
        if (date < this.unitBizDate) {
            month--;
            if (month < 0) year--;
        }
        if (month < this.unitBizMonth) {
            year--;
        }
        month = this.unitBizMonth;
        this.from = new Date(year, month, this.unitBizDate);
        this.to = new Date(this.from);
        this.to.setFullYear(this.to.getFullYear() + 1);
        this.setCaption();
    }
    prev(): void {
        this.from = new Date(this.from.setFullYear(this.from.getFullYear() - 1));
        this.to = new Date(this.to.setFullYear(this.to.getFullYear() - 1));
        this.setCaption();
    }
    next(): void {
        this.from = new Date(this.from.setFullYear(this.from.getFullYear() + 1));
        this.to = new Date(this.to.setFullYear(this.to.getFullYear() + 1));
        this.setCaption();
    }
    setCaption(): void {
        switch (this.unitBizMonth) {
            case 0:
                this.caption = `${this.from.getFullYear()}年`;
                break;
            case 11:
                this.caption = `${this.to.getFullYear()}年`;
                break;
            default:
                this.caption = `${this.from.getFullYear()}-${this.to.getFullYear().toString().substring(2)}年`;
                break;
        }
    }
}

export function createPeriod(periodType: EnumPeriod, timezone: number, unitBizMonth: number, unitBizDate: number): Period {
    let period: Period;
    switch (periodType) {
        case EnumPeriod.day: period = new DayPeriod(timezone, unitBizMonth, unitBizDate); break;
        case EnumPeriod.week: period = new WeekPeriod(timezone, unitBizMonth, unitBizDate); break;
        case EnumPeriod.month: period = new MonthPeriod(timezone, unitBizMonth, unitBizDate); break;
        case EnumPeriod.year: period = new YearPeriod(timezone, unitBizMonth, unitBizDate); break;
    }
    return period;
}