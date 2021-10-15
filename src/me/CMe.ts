import { makeObservable, observable } from "mobx";
import { QueryPager, User, VTestMobx } from "tonva-react";
import { CUqBase } from "uq-app";
import { VMe } from "./VMe";
import { VEditMe } from "./VEditMe";
import { VAdminSetting } from "./VAdminSetting";

export class CMe extends CUqBase {
	unitOwner: User;
	rootUnits: QueryPager<any>;
	admins: {id:number;role:number}[] = null;
	isAdmin: boolean = false;
	map = new Map();
	constructor(res:any) {
		super(res);
		makeObservable(this, {
			isAdmin: observable,
			map: observable.shallow,
		});
	}

	mapAdd = () => {
		let v = this.map.get(1);
		if (!v) {
			v = 1;
		}
		else {
			v = {v};
		}
		this.map.set(1, v);
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

	testPointShop = async () => {
		let ret = await this.uqs.JkPointShop.GetPoints.query({customer: 1});
	}
}