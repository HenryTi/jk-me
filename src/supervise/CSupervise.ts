import { VItemDayHistory } from "./VItemDayHistory";
import { CUqBase } from "uq-app";
import { Item, ReturnGetItemSumDaysRet, ReturnGetItemSumMonthsRet } from "uq-app/uqs/JkMe";
import { VSupervise } from "./VSupervise";
import { VItemMonthHistory } from "./VItemMonthHistory";

export class CSupervise extends CUqBase {
	item: Item;
	itemSumDays: ReturnGetItemSumDaysRet[];
	itemSumMonths: ReturnGetItemSumMonthsRet[];

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
}
