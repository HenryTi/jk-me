import { makeObservable } from "mobx";
import { CApp, CUqBase } from "uq-app";
import { VHome } from "./VHome";

export interface AccountController {
	start(): Promise<void>;
	loadItem(): Promise<void>;
	renderItem():JSX.Element;	
}

export class CHome extends CUqBase {
	constructor(cApp: CApp) {
		super(cApp);
		makeObservable(this, {
			//periodSum: observable.ref
		});
	}

	protected async internalStart() {
	}

	tab = () => this.renderView(VHome);

	load = async () => {
		await this.cApp.cPeriodSum.load();
	}
}
