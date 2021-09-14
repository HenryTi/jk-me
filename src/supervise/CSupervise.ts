import { VItemDayHistory } from "./VItemDayHistory";
import { CUqBase, UQs } from "uq-app";
import { Item, ReturnGetItemHistory$page, ReturnGetItemSumDaysRet, ReturnGetItemSumMonthsRet } from "uq-app/uqs/JkMe";
import { VSupervise } from "./VSupervise";
import { VItemMonthHistory } from "./VItemMonthHistory";
import { PageItems } from "tonva-react";
import { VItemHistory } from "./VItemHistory";

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

	async showItemDayHistory(item: Item) {
		if (item) this.item = item;
		else item = this.item;
		let ret = await this.uqs.JkMe.GetItemSumDays.query({item, date: new Date(), days: 30});
		this.itemSumDays = ret.ret;
		this.openVPage(VItemDayHistory);
	}

	async showItemMonthHistory(item: Item) {
		if (item) this.item = item;
		else item = this.item;
		let ret = await this.uqs.JkMe.GetItemSumMonths.query({item, date: new Date(), months: 12});
		this.itemSumMonths = ret.ret;
		this.openVPage(VItemMonthHistory);
	}

	async showItemHistory(from:Date, to:Date) {
		this.pageItemHistory = new PageItemHistory(this.uqs);
		await this.pageItemHistory.first({
			item:this.item, 
			from, 
			to
		});
		this.openVPage(VItemHistory);
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
