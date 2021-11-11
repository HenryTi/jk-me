import { makeObservable, observable, runInAction } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { EnumAccount, ReturnGetObjectAccountHistoryRet, ReturnGetUserObjectAccountRet } from "uq-app/uqs/JkMe";
import { VHome } from "./VHome";
import { VObjectAccountHistory } from "../account/VObjectAccountHistory";
import { CAccount } from "account";

export interface AccountController {
	start(): Promise<void>;
	loadItem(): Promise<void>;
	renderItem():JSX.Element;	
}

export class CHome extends CUqBase {
	cAccount: CAccount;

	tab = () => this.renderView(VHome);

	load = async () => {
		this.cAccount = this.newC(CAccount);
		await Promise.all([this.cApp.cPortal.load(), this.cAccount.load(undefined)]);
	}
}
