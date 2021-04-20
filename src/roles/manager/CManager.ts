import { CUqBase } from "uq-app";
import { VManager } from "./VManager";
import { VManagerNav } from "./VManagerNav";

export class CManager extends CUqBase {
	protected async internalStart() {
		this.openVPage(VManager);
	}

	renderNav() {
		return this.renderView(VManagerNav);
	}
}