// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonwa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { ExchangeDetail } from "./JkPointShop";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	main: {
		"name": "main",
		"type": "id",
		"isKey": false,
		"label": "Main"
	} as FieldItemId,
	item: {
		"name": "item",
		"type": "id",
		"isKey": false,
		"label": "Item"
	} as FieldItemId,
	quantity: {
		"name": "quantity",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Quantity"
	} as FieldItemNumber,
	point: {
		"name": "point",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Point"
	} as FieldItemNumber,
	subAmount: {
		"name": "subAmount",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "SubAmount"
	} as FieldItemNumber,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.main, fields.item, fields.quantity, fields.point, fields.subAmount, 
];

export const ui: UI = {
	label: "ExchangeDetail",
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

export const t: TFunc = (str: string | JSX.Element): string | JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: ExchangeDetail): JSX.Element {
	return <>{uqStringify(item)}</>;
};
