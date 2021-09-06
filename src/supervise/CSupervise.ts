import { CUqBase } from "uq-app";
import { VSupervise } from "./VSupervise";

export class CSupervise extends CUqBase {
	protected async internalStart() {
	}

	tab = () => this.renderView(VSupervise);

	load = async() => {
	}
}
