// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { DxExchangeDetail } from "./JkPointShop";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	deliver: {
		"name": "deliver",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Deliver"
	} as FieldItemNum,
	deliverDone: {
		"name": "deliverDone",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "DeliverDone"
	} as FieldItemNum,
	deliverTime: {
		"name": "deliverTime",
		"isKey": false,
		"label": "DeliverTime"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.deliver, fields.deliverDone, fields.deliverTime, 
];

export const ui: UI = {
	label: "DxExchangeDetail",
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

export function render(item: DxExchangeDetail):JSX.Element {
	return <>{uqStringify(item)}</>;
};
