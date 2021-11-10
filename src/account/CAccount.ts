import { makeObservable, observable, runInAction } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { Title } from "uq-app/CApp";
import { EnumAccount, ReturnGetObjectAccountHistoryRet, ReturnGetUserObjectAccountRet } from "uq-app/uqs/JkMe";
import { VAccount } from "./VAccount";
import { VObjectAccountHistory } from "./VObjectAccountHistory";

export class CAccount extends CUqBase {
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

    renderAccounts() {
        return this.renderView(VAccount);
    }

	async load(object: number) {
		let ret = await this.uqs.JkMe.GetUserObjectAccount.query({object});
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
