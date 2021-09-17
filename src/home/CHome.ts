import { makeObservable, observable } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { EnumPeriod, ItemPeriodSum, PeriodSum } from "./periodSum";
//import { Account, AccountType, EnumAccountType } from "uq-app/uqs/JkMe";
//import { CContentManager } from "./contentManager";
//import { CCTO } from "./cto";
import { VHome } from "./VHome";
import { VItemHistory } from "./VItemHistory";
import { VItemPeriodHistory } from "./VItemPeriodHistory";

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

	async showItemPeriodHistory(ips: ItemPeriodSum, sumPeriod: EnumPeriod) {
		await this.periodSum.loadPeriodHistory(ips, sumPeriod);
		this.openVPage(VItemPeriodHistory);
	}
}
