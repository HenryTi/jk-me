import { VNav } from "roles/VNav";
import { CManager } from "./CManager";

export class VManagerNav extends VNav<CManager> {
	protected get caption():string {return '组长'}
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-success'}
}