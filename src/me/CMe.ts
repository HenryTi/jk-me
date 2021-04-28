import { makeObservable, observable } from "mobx";
import { Prop, QueryPager, User } from "tonva-react";
import { CUqBase } from "uq-app";
import { VMe } from "./VMe";
import { VEditMe } from "./VEditMe";
import { CAdmin, CManager, CTeamLeader } from "roles";

export interface RootUnitItem {
	id: number;					// root unit id
	owner: any;
	name: string;				// 唯一
	content: string;
	tonvaUnit: number;			// 跟tonva机构对应的值
	x: number;
}

interface RoleNav {
	renderNav(): JSX.Element;
}

export class CMe extends CUqBase {
	private readonly roleNavColl: {[role:string]:RoleNav};
	role: number;
	unitOwner: User;
	rootUnits: QueryPager<any>;
	roles: string[] = null;
	constructor(res:any) {
		super(res);
		makeObservable(this, {
			roles: observable,
		});
		this.roleNavColl = {
			admin: this.newC(CAdmin),
			manager: this.newC(CManager),
			teamLeader: this.newC(CTeamLeader),
		}
	}

	roleNavs():Prop[] {
		if (!this.roles) return;
		let arr = ['admin', 'manager', 'teamLeader'];
		let sortedRoles = arr.filter(v => this.roles.findIndex(r => r === v) >= 0);
		return sortedRoles.map(v => {
			return {
				type: 'component',
				component: this.roleNavColl[v].renderNav(),
			} as Prop;
		});
	}

    protected async internalStart() {
	}

	tab = () => {
		return this.renderView(VMe);
	}

	showEditMe = async () => {
		//let result = await this.uqs.Notes.GetSystemRole.query({});
		//this.role = result.ret[0]?.role;
		this.openVPage(VEditMe);
	}

	load = async () => {
		this.roles = await this.getUqRoles(this.uqs.JkMe.$.name);
	}

	backend = async () => {
		//let cRoles = new CRoles(this.uq, this.res);
		//await cRoles.start();
	}

	private myRolesChanged = (roles:string[]) => {
		//this.roles = roles;
		//this.user.roles[this.uq.$.name] = roles;
		//nav.saveLocalUser();
	}
	/*
	roleAdmin = async () => {
		let cRoleAdmin = new CRoleAdmin(this.uqs.JkMe, this.myRolesChanged);
		await cRoleAdmin.start();
	}
	*/
}
