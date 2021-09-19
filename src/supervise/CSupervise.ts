import { CUqBase, UQs } from "uq-app";
import { Item, ReturnGetItemHistory$page, ReturnGetItemSumDaysRet, ReturnGetItemSumMonthsRet, ReturnGetProductSumByMonthRet } from "uq-app/uqs/JkMe";
import { VSupervise } from "./VSupervise";
import { VItemSumHistory } from "./VItemSumHistory";
import { env, PageItems } from "tonva-react";
import { VItemHistory } from "./VItemHistory";
import { VItemDayHistory } from "./VItemDayHistory";
import { VProductSumByMonth } from "./VProductSumByMonth";

export class CSupervise extends CUqBase {
	item: Item;
	itemSumDays: ReturnGetItemSumDaysRet[];
	itemSumMonths: ReturnGetItemSumMonthsRet[];
	pageItemHistory: PageItemHistory;

	protected async internalStart() {
	}

	tab = () => this.renderView(VSupervise);

	load = async() => {
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
				timeZone: env.timeZone,
			}),
			this.uqs.JkMe.GetItemSumMonths.query({
				item, 
				date, 
				months: 12,
				timeZone: env.timeZone,
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
				timeZone: env.timeZone,
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
			timeZone: env.timeZone,
		});
		this.openVPage(VItemHistory);
	}

	productSumByMonth: ReturnGetProductSumByMonthRet[];
	showProductSumByMonth = async () => {
		let date = new Date();
		let month = date.getFullYear() * 100 + (date.getMonth() + 1);
		let ret = await this.uqs.JkMe.GetProductSumByMonth.query({month});
		this.productSumByMonth = ret.ret;
		let len = this.productSumByMonth.length;
		for (let i=0; i<len; i++) {
			(this.productSumByMonth[i] as any).$serial = i+1;
		}
		this.openVPage(VProductSumByMonth);
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
