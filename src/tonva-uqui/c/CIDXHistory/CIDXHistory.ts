import { PageItems } from "tonva-react";
import { IDBase } from "../../base";
import { CUqUi, IDXHistoryUiProps } from "../props";
import { VIDXHistory } from "./VIDXHistory";

export class CIDXHistory<T> extends CUqUi<IDXHistoryUiProps<T>> {
	field: string;
	historyItems: HistoryPageItems<any>
	
	protected async internalStart() {
		this.openVPage(VIDXHistory);
	}
}

class HistoryPageItems<T extends IDBase> extends PageItems<T> {
	private readonly props: IDXHistoryUiProps<T>;
	constructor(props: IDXHistoryUiProps<T>) {
		super(true);
		this.props = props;
	}

	async loadResults(param:any, pageStart:any, pageSize:number): Promise<{[name:string]:any[]}> {
		let {id, field, far, near} = param;
		let {uq, IDX} = this.props;
		let ret = await uq.IDLog({
			field,
			id,
			IDX,
			log: 'each',
			page: {
				start: pageStart,
				size: pageSize,
			}
		})
		//let ret = await this.pageLoader(id, field, far, near, pageStart, pageSize);
		return {$page:ret};
	}
}
