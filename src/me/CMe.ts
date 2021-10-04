import { makeObservable, observable } from "mobx";
import { QueryPager, User } from "tonva-react";
import { CUqBase } from "uq-app";
import { VMe } from "./VMe";
import { VEditMe } from "./VEditMe";
import { VAdminSetting } from "./VAdminSetting";

export class CMe extends CUqBase {
	unitOwner: User;
	rootUnits: QueryPager<any>;
	admins: {id:number;role:number}[] = null;
	isAdmin: boolean = false;
	constructor(res:any) {
		super(res);
		makeObservable(this, {
			isAdmin: observable,
		});
	}

    protected async internalStart() {
	}

	tab = () => {
		return this.renderView(VMe);
	}

	showEditMe = async () => {
		this.openVPage(VEditMe);
	}

	load = async () => {
		let admins = await this.uqs.JkMe.getAdmins();
		if (!admins) return;
		let userId = this.user.id;
		let p = admins.findIndex(v => v.id === userId);
		if (p >= 0) admins.splice(p, 1);
		this.admins = admins;
		this.isAdmin = true;
	}

	backend = async () => {
		//let cRoles = new CRoles(this.uq, this.res);
		//await cRoles.start();
	}

	adminSetting = async () => {
		this.openVPage(VAdminSetting);
	}
}
