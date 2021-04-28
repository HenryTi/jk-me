import { VRoleNav } from "roles/VRoleNav";
import { CAdmin } from "./CAdmin";

export class VAdminNav extends VRoleNav<CAdmin> {
	protected get caption():string {return '管理员'}
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-danger'}
}
