import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { DxOrderDetail } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	deliverDone: {
		"name": "deliverDone",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "DeliverDone"
	} as FieldItemNum,
	receiveDone: {
		"name": "receiveDone",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "ReceiveDone"
	} as FieldItemNum,
	return: {
		"name": "return",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Return"
	} as FieldItemNum,
	costPrice: {
		"name": "costPrice",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "CostPrice"
	} as FieldItemNum,
	bottomPrice: {
		"name": "bottomPrice",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "BottomPrice"
	} as FieldItemNum,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.deliverDone, fields.receiveDone, fields.return, fields.costPrice, fields.bottomPrice, 
];

export const ui: UI = {
	label: "DxOrderDetail",
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

export function render(item: DxOrderDetail):JSX.Element {
	return <>{uqStringify(item)}</>;
};
