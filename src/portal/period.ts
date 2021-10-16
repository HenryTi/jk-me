import { action, computed, makeObservable, observable } from "mobx";
import { Item, Post, ReturnUserItemPeriodSumRet } from "uq-app/uqs/JkMe";

export enum EnumPeriod {day = 0, month = 1, week = 2, year = 3}

export interface ItemPeriodSum extends ReturnUserItemPeriodSumRet {
	id: number;
	object: number;
	post: Post;
	item: Item;
	value: number;
}

export interface PostPeriodSum {
    post: Post;
    itemColl: {[item in keyof typeof Item]: ItemPeriodSum};
    itemList: ItemPeriodSum[];
}

export abstract class Period {
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
        //date.setDate(date.getDate()+1);
        return this.to <= date;
    }
    abstract render(): string;
}

class DayPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.day;
        this.to.setDate(this.from.getDate()+1);
    }
    prev(): void {
        this.to = new Date(this.to.setDate(this.to.getDate()-1));
        this.from = new Date(this.from.setDate(this.from.getDate()-1));
    }
    next(): void {
        this.to = new Date(this.to.setDate(this.to.getDate()+1));
        this.from = new Date(this.from.setDate(this.from.getDate()+1));
    }
    render(): string {return this.from.toLocaleDateString()}
}

class WeekPeriod extends Period {
    init(): void {
        this.type = EnumPeriod.week;
        let day = this.to.getDay();
        let diff = this.to.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
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
        let to = new Date(this.to);
        to.setDate(to.getDate() - 1);
        return `${this.from.toLocaleDateString()} - ${to.toLocaleDateString()}`;
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
    render(): string {return `${this.from.getFullYear()}年${this.from.getMonth()+1}月`;}
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
    render(): string {return `${this.from.getFullYear()}年`}
}

export function createPeriod(periodType: EnumPeriod): Period {
    let period: Period;
    switch (periodType) {
        case EnumPeriod.day: period = new DayPeriod(); break;
        case EnumPeriod.week: period = new WeekPeriod(); break;
        case EnumPeriod.month: period = new MonthPeriod(); break;
        case EnumPeriod.year: period = new YearPeriod(); break;
    }
    return period;
}