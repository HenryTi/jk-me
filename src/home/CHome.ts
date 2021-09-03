import { makeObservable, observable } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { EnumPeriod, ItemPeriodSum, PeriodSum } from "./periodSum";
//import { Account, AccountType, EnumAccountType } from "uq-app/uqs/JkMe";
//import { CContentManager } from "./contentManager";
//import { CCTO } from "./cto";
import { VHome } from "./VHome";
import { VItemHistory } from "./VItemHistory";

export interface AccountController {
	start(): Promise<void>;
	loadItem(): Promise<void>;
	renderItem():JSX.Element;	
}

export class CHome extends CUqBase {

	//accountTypes: AccountType[];
	//cCTO: CCTO;
	//accountId: number;
	//accountControllers: AccountController[];
	//from: Date;
	//to: Date;
	//items: ReturnUserItemPeriodSumRet[];
	periodSum: PeriodSum;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
			periodSum: observable.ref
		});
		//this.cCTO = this.newSub(CCTO);
		this.periodSum = new PeriodSum(this.uqs);
	}

	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {
		await this.periodSum.load();

		// await this.loadPeriodSum(from, to);
		/*
		let ret = await me.UserItemPeriodSum.query({
			from: '2021-8-31',
			to: '2021-9-2',
		});
		this.items = ret.ret;
		*/
		 //..UserItemPeriodSum await Promise.all([
			/*
			me.QueryID<Account>({
				IDX: [me.Account],
				keyx: {user:undefined, accounType: undefined},
			}),
			me.QueryID<AccountType>({
				IX: [me.UserAccountType],
				IDX: [me.AccountType],
				ix: undefined,
			}),
			*/
			// me.$QueryID<any>({
			//	IX: [me.PostItem],
				//IDX: [me.P..AccountType],
				//ix: undefined,
			//}),
		//]);
		//let account = ret[0];
		//let accounType = ret[1];
		//let sql = ret[0];

		/*
		this.accountId = account[0]?.id;
		this.accountControllers = accounType.map(v => {
			switch(v.type) {
				default:
				case EnumAccountType.cto: return this.newSub(CCTO);
				case EnumAccountType.contentManager: return this.newSub(CContentManager);
			}
		});
		await Promise.all(this.accountControllers.map(v => v.loadItem()));
		*/
	}

	async showItemHistory(ips: ItemPeriodSum, sumPeriod: EnumPeriod) {
		await this.periodSum.loadHistory(ips, sumPeriod);
		this.openVPage(VItemHistory);
	}

	/*
	async loadPeriodSum(from: Date, to: Date) {
		this.from = from;
		this.to = to;
		let me = this.uqs.JkMe;
		let ret = await me.UserItemPeriodSum.query({
			from,
			to,
		});
		this.items = ret.ret;
	}
	*/
}
