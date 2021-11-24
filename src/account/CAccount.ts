import { isObservable } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { Title } from "uq-app/CApp";
import { EnumAccount, ReturnGetObjectAccountHistoryRet, ReturnGetUserObjectAccountRet } from "uq-app/uqs/JkMe";
import { VAccount } from "./VAccount";
import { VObjectAccountHistory } from "./VObjectAccountHistory";

export class CAccount extends CUqBase {
	data: {
		accounts: ReturnGetUserObjectAccountRet[];
	};
	account: ReturnGetUserObjectAccountRet;
	accountHistory: ReturnGetObjectAccountHistoryRet[];
	accountTitle:Title;

    constructor(cApp: CApp) {
		super(cApp);
		this.data = this.shallow({
			accounts: null,
		});
	}

    renderAccounts() {
        return this.renderView(VAccount);
    }

	async load(object: number) {
		let ret = await this.uqs.JkMe.GetUserObjectAccount.query({object});
		this.runInAction(() => {
			this.data.accounts = ret.ret;
			console.log('isObservable(this.data.accounts[0])', isObservable(this.data.accounts[0]));
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
