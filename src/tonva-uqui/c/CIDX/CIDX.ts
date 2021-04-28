import { IDBase } from "../../base";
import { CUqUi, IDXUiProps } from "../props";
import { VIDX } from "./VIDX";

export class CIDX<T extends IDBase> extends CUqUi<IDXUiProps<T>> {
	protected async internalStart() {
		this.openVPage(VIDX);
	}
}
