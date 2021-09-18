import { makeObservable, observable } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { EnumPeriod, ItemPeriodSum, PeriodSum } from "./periodSum";
import { VHome } from "./VHome";
import { VItemHistory } from "./VItemHistory";
import { VItemDayHistory, VItemMonthHistory } from "./VItemPeriodHistory";

export interface AccountController {
	start(): Promise<void>;
	loadItem(): Promise<void>;
	renderItem():JSX.Element;	
}

export class CHome extends CUqBase {
	periodSum: PeriodSum;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
			periodSum: observable.ref
		});
		this.periodSum = new PeriodSum(this.uqs);
	}

	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {
		await this.periodSum.load();
	}

	async showItemHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.periodSum.loadHistory(ips, from, to);
		this.openVPage(VItemHistory);
	}

	async showItemDayHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.periodSum.loadPeriodHistory(ips, from, to, EnumPeriod.day);
		this.openVPage(VItemDayHistory);
	}

	async showItemMonthHistory(ips: ItemPeriodSum, from: Date, to: Date) {
		await this.periodSum.loadPeriodHistory(ips, from, to, EnumPeriod.month);
		this.openVPage(VItemMonthHistory);
	}
}
