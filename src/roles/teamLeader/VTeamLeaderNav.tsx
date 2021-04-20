import { VNav } from "roles/VNav";
import { CTeamLeader } from "./CTeamLeader";

export class VTeamLeaderNav extends VNav<CTeamLeader> {
	protected get caption():string {return '经理'}
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-primary'}
}