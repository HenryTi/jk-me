import { CUqBase } from "uq-app";
import { VHome } from "./VHome";
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
