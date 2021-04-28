import { IDUI } from "tonva-react";
import { MidID } from "tonva-uqui";
import { CIX, CXI, XIUiProps } from "tonva-uqui/c";
import { IDListUiProps, IXListUiProps, IXUiProps, XIListUiProps } from "tonva-uqui";
import { CUqBase } from "uq-app";
import { Staff, Team } from "uq-app/uqs/JkMe";
import { CIDTeam } from "./team";
import { VAdmin } from "./VAdmin";
import { VAdminNav } from "./VAdminNav";

export class CAdmin extends CUqBase {
	protected async internalStart() {
		this.openVPage(VAdmin);
	}

	renderNav() {
		return this.renderView(VAdminNav);
	}

	testC = async() => {
		let uq = this.uqs.JkMe;
		/*
		let idListUiProps:IDListUiProps<Team> = {
			uq,
			ID: uq.Team,
			renderItem: (item:Team, index:number) => this.renderView(VTeamItem, item),
		}
		let c = new CIDList(idListUiProps);
		await c.start();
		*/

		let ixProps: IDListUiProps<Team> = {
			uq,
			ID: uq.Team,
		};
		let xiProps: IXListUiProps<Team, Staff> = {
			uq,
			ID: uq.Staff,
			IX: uq.TeamStaff,
			ix: undefined,
			header: '小组职员',
		};
		let ixUiProps: IXUiProps<Team, Staff> = {
			uq,
			ixProps,
			xiProps,
		};
		let c = new CIX(ixUiProps);
		await c.start();
	}

	showTeams = async () => {
		/*
		let uq = this.uqs.JkMe;
		let IDUI: IDUI = {
			ID: uq.Team,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidID<Team>(uq, IDUI);
		mId.listHeader = '小组列表';
		mId.itemHeader = '小组';
		let cID = new CIDTeam(mId);
		await cID.call();
		*/
		let uq = this.uqs.JkMe;
		let ixProps: IDListUiProps<Team> = {
			uq,
			ID: uq.Team,
		};
		let xiProps: IXListUiProps<Team, Staff> = {
			uq,
			ID: uq.Staff,
			IX: uq.TeamStaff,
			ix: undefined,
			header: '小组职员',
		};
		let ixUiProps: IXUiProps<Team, Staff> = {
			uq,
			ixProps,
			xiProps,
		};
		let c = new CIX(ixUiProps);
		await c.start();
	}

	showStaffs = async () => {
		/*
		let uq = this.uqs.JkMe;
		let IDUI: IDUI = {
			ID: uq.Staff,
			fieldCustoms: {
				//no: {hiden: true},
			},
			t: this.t,
		}
		let mId = new MidID<Team>(uq, IDUI);
		mId.listHeader = '员工列表';
		mId.itemHeader = '员工';
		let cID = new CIDTeam(mId);
		await cID.call();
		*/
		let uq = this.uqs.JkMe;
		let xiProps: IDListUiProps<Staff> = {
			uq,
			ID: uq.Staff,
		};
		let ixProps: XIListUiProps<Staff, Team> = {
			uq,
			ID: uq.Team,
			IX: uq.TeamStaff,
			xi: undefined,
			header: '职员所属小组',
		};
		let xiUiProps: XIUiProps<Staff, Team> = {
			uq,
			xiProps,
			ixProps,
		};
		let c = new CXI(xiUiProps);
		await c.start();
	}
}