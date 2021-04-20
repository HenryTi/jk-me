import { CUqBase } from "uq-app";
import { VTeamLeader } from "./VTeamLeader";
import { VTeamLeaderNav } from './VTeamLeaderNav';

export class CTeamLeader extends CUqBase {
	protected async internalStart() {
		this.openVPage(VTeamLeader);
	}

	renderNav() {
		return this.renderView(VTeamLeaderNav);
	}
}
