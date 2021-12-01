import { User } from "tonwa-core";
import { QueryPager } from "tonwa";
import { CUqBase } from "uq-app";
import { VMe } from "./VMe";
import { VEditMe } from "./VEditMe";
import { VAdminSetting } from "./VAdminSetting";

export class CMe extends CUqBase {
	unitOwner: User;
	rootUnits: QueryPager<any>;
	admins: { id: number; role: number }[] = null;
	data: {
		isAdmin: boolean;
		map: Map<any, any>;
	};
	// isAdmin: boolean = false;
	// map = new Map();
	constructor(res: any) {
		super(res);
		/*
		makeObservable(this, {
			isAdmin: observable,
			map: observable.shallow,
		});
		*/
		this.data = this.shallow({
			isAdmin: false,
			map: new Map(),
		});
	}

	mapAdd = () => {
		let { map } = this.data;
		let v = map.get(1);
		if (!v) {
			v = 1;
		}
		else {
			v = { v };
		}
		map.set(1, v);
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
		this.runInAction(() => {
			let userId = this.user.id;
			let p = admins.findIndex(v => v.id === userId);
			if (p >= 0) admins.splice(p, 1);
			this.admins = admins;
			this.data.isAdmin = true;
		});
	}

	backend = async () => {
		//let cRoles = new CRoles(this.uq, this.res);
		//await cRoles.start();
	}

	adminSetting = async () => {
		this.openVPage(VAdminSetting);
	}

	testPointShop = async () => {
		//let ret = await this.uqs.JkPointShop.GetPoints.query({customer: 1});
	}
}
