import { VRoleNav } from "roles/VRoleNav";
import { CManager } from "./CManager";

export class VManagerNav extends VRoleNav<CManager> {
	protected get caption():string {return '经理'}
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-success'}
}