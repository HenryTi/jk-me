import { VPage } from "tonva-react";
import { CManager } from "./CManager";

export class VManager extends VPage<CManager> {
	header() {return '经理'}
	content() {
		return <div className="p-3">
			经理
		</div>
	}
}
