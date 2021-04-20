import { VPage } from "tonva-react";
import { CTeamLeader } from "./CTeamLeader";

export class VTeamLeader extends VPage<CTeamLeader> {
	header() {return '组长'}
	content() {
		return <div className="p-3">
			组长
		</div>
	}
}
