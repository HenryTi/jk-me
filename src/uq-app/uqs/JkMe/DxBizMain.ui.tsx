// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { DxBizMain } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	ready: {
		"name": "ready",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Ready"
	} as FieldItemInt,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.ready, 
];

export const ui: UI = {
	label: "DxBizMain",
	fieldArr,
	fields,
};

const resRaw: Res<any> = {
	$zh: {
	},
	$en: {
	}
};
const res: any = {};
setRes(res, resRaw);

export const t:TFunc = (str:string|JSX.Element): string|JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: DxBizMain):JSX.Element {
	return <>{uqStringify(item)}</>;
};
