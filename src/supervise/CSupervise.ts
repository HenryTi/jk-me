import { CUqBase, UQs } from "uq-app";
import { ReturnGetObjectsRet
	, ReturnGetGroupsRet
	, ReturnGetDistributorsRet
	, ReturnGetAgentsRet
	, ReturnGetStaffsRet
	, ReturnGetPostsRet
	, ReturnGetUserSuperviseObjectRet
	, ReturnGetUserSuperviseItemRet
	, ReturnGetCustomerSumByMonthRet, ReturnGetItemHistory$page
	, ReturnGetItemSumDaysRet, ReturnGetItemSumMonthsRet
	, ReturnGetProductSumByMonthRet
} from "uq-app/uqs/JkMe";
import { Item  } from "uq-app/uqs/JkMe/JkMe";
import { VSupervise } from "./VSupervise";
import { VItemSumHistory } from "./VItemSumHistory";
import { env, PageItems } from "tonva-react";
import { VItemHistory } from "./VItemHistory";
import { VItemDayHistory } from "./VItemDayHistory";
import { VCustomerSumByMonth, VProductSumByMonth } from "./VSumByMonth";
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { CObjects } from "./objects/CObjects";
import { initCObjects } from "./objects";

export class CSupervise extends CUqBase {
	item: Item;
	itemSumDays: ReturnGetItemSumDaysRet[];
	itemSumMonths: ReturnGetItemSumMonthsRet[];
	pageItemHistory: PageItemHistory;
	monthSum: MonthSum<any>;
	superviseObjects: ReturnGetUserSuperviseObjectRet[];
	superviseItems: ReturnGetUserSuperviseItemRet[];
	objects: ReturnGetObjectsRet[];
	groups: ReturnGetGroupsRet[];
	distributors: ReturnGetDistributorsRet[];
	agents: ReturnGetAgentsRet[];
	staffs: ReturnGetStaffsRet[];
	posts: ReturnGetPostsRet[];
	cObjectsArr: CObjects[];

	protected async internalStart() {
	}

	tab = () => this.renderView(VSupervise);

	load = async() => {
		this.cObjectsArr = initCObjects(this);
		let {JkMe} = this.uqs;
		let [superviseObjects, superviseItems] = await Promise.all([
			JkMe.GetUserSuperviseObject.query({}),
			JkMe.GetUserSuperviseItem.query({}),
		]);
		this.superviseObjects = superviseObjects.ret;
		this.superviseItems = superviseItems.ret;
	}

	async showItemSumHistory(item: Item) {
		if (item) this.item = item;
		else item = this.item;
		let date = new Date();
		date.setDate(date.getDate() + 1);
		let [itemSumDays, itemSumMonths] = await Promise.all([
			this.uqs.JkMe.GetItemSumDays.query({
				item, 
				date, 
				days: 30,
			}),
			this.uqs.JkMe.GetItemSumMonths.query({
				item, 
				date, 
				months: 12,
			}),
		]);
		this.itemSumDays = itemSumDays.ret;
		this.itemSumMonths = itemSumMonths.ret;
		this.openVPage(VItemSumHistory);
	}

	async showItemDayHistory(item: Item, from:Date, to:Date) {
		if (item) this.item = item;
		else item = this.item;
		let days = Math.floor((to.getTime() - from.getTime())/ (1000*3600*24));
		let [itemSumDays] = await Promise.all([
			this.uqs.JkMe.GetItemSumDays.query({
				item, 
				date: to, 
				days,
			})
		]);
		this.itemSumDays = itemSumDays.ret;
		this.openVPage(VItemDayHistory);
	}

	async showItemHistory(from:Date, to:Date) {
		this.pageItemHistory = new PageItemHistory(this.uqs);
		await this.pageItemHistory.first({
			item:this.item, 
			from, 
			to,
		});
		this.openVPage(VItemHistory);
	}

	showProductSumByMonth = async (caption: string, item: Item) => {
		this.monthSum = new MonthSumProduct(this, caption, item);
		await this.monthSum.load();
		this.openVPage(VProductSumByMonth);
	}

	showCustomerSumByMonth = async (caption: string, item: Item) => {
		this.monthSum = new MonthSumCustomer(this, caption, item);
		await this.monthSum.load();
		this.openVPage(VCustomerSumByMonth);
	}

	renderVUnitSum() {
		return this.cApp.renderVUnitSum();
	}
}

class PageItemHistory extends PageItems<ReturnGetItemHistory$page> {
	private uqs: UQs;
	constructor(uqs: UQs) {
		super();
		this.uqs = uqs;
	}
	protected async loadResults(param: any, pageStart: any, pageSize: number): Promise<{
        [name: string]: any[];
    }> {
		let ret = await this.uqs.JkMe.GetItemHistory.page(param, pageStart, pageSize);
		return ret as any;
	}
}

abstract class MonthSum<T> {
	protected controller: CSupervise;
	vCaption: string;
	item: Item;
	month: Date;
	list: T[];
	constructor(controller: CSupervise, caption: string, item: Item) {
		this.controller = controller;
		this.month = new Date();
		this.month.setDate(1);
		this.month.setHours(0, 0, 0, 0);
		this.vCaption = caption;
		this.item = item;
		makeObservable(this, {
			month: observable,
			hasNext: computed,
			prev: action,
			next: action,
			list: observable.shallow,
		});
	}

	prev = async () => {
		let m = new Date(this.month);
		m.setMonth(m.getMonth() - 1);
		this.month = m;
		await this.load();
	}

	next = async () => {
		if (this.hasNext === true) {
			let m = new Date(this.month);
			m.setMonth(m.getMonth() + 1);
			this.month = m;
			await this.load();
		}
	}

	get hasNext():boolean {
		let d = new Date();
		d.setDate(0);
		d.setHours(0, 0, 0, 0);
		return this.month < d;
	}

	abstract load(): Promise<void>;
}

class MonthSumProduct extends MonthSum<ReturnGetProductSumByMonthRet> {
	async load(): Promise<void> {
		let m = this.month.getFullYear() * 100 + (this.month.getMonth() + 1);
		let param = {
			item: this.item, 
			month: m,
			count: 200,
		};
		let ret = await this.controller.uqs.JkMe.GetProductSumByMonth.query(param);
		let list = ret.ret;
		let len = list.length;
		for (let i=0; i<len; i++) {
			(list[i] as any).$serial = i+1;
		}
		runInAction(() => {
			this.list = list;
		});
	}
}

class MonthSumCustomer extends MonthSum<ReturnGetCustomerSumByMonthRet> {
	async load(): Promise<void> {
		let m = this.month.getFullYear() * 100 + (this.month.getMonth() + 1);
		let param = {
			item: this.item, 
			month: m,
			count: 200,
		};
		let ret = await this.controller.uqs.JkMe.GetCustomerSumByMonth.query(param);
		let list = ret.ret;
		let len = list.length;
		for (let i=0; i<len; i++) {
			(list[i] as any).$serial = i+1;
		}
		runInAction(() => {
			this.list = list;
		});
	}
}