import { VRoleNav } from "roles/VRoleNav";
import { CTeamLeader } from "./CTeamLeader";

export class VTeamLeaderNav extends VRoleNav<CTeamLeader> {
	protected get caption():string {return '组长'}
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-primary'}
}