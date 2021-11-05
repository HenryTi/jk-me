import { makeObservable, observable, runInAction } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { Title } from "uq-app/CApp";
import { EnumAccount, ReturnGetObjectAccountHistoryRet, ReturnGetUserObjectAccountRet } from "uq-app/uqs/JkMe";
import { VHome } from "./VHome";
import { VObjectAccountHistory } from "./VObjectAccountHistory";

export interface AccountController {
	start(): Promise<void>;
	loadItem(): Promise<void>;
	renderItem():JSX.Element;	
}

export class CHome extends CUqBase {
	accounts: ReturnGetUserObjectAccountRet[] = null;
	account: ReturnGetUserObjectAccountRet;
	accountHistory: ReturnGetObjectAccountHistoryRet[];
	accountTitle:Title;

	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
			accounts: observable
		});
	}

	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {
		await Promise.all([this.cApp.cPortal.load(), this.loadAccount()]);
	}

	private async loadAccount() {
		let ret = await this.uqs.JkMe.GetUserObjectAccount.query({});
		runInAction(() => {
			this.accounts = ret.ret;
		});
	}

	onAccountClick = async (account: ReturnGetUserObjectAccountRet) => {
		this.account = account;
		let {objectAccount, account:enumAccount} = account;
		let ret = await this.uqs.JkMe.GetObjectAccountHistory.query({objectAccount});
		this.accountHistory = ret.ret;
		this.accountTitle = this.cApp.accountTitles[enumAccount as EnumAccount];
		this.openVPage(VObjectAccountHistory);
	}
}
