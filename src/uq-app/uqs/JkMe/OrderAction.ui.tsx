// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { OrderAction } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	actionId: {
		"name": "actionId",
		"type": "id",
		"isKey": true,
		"label": "ActionId"
	} as FieldItemId,
	action: {
		"name": "action",
		"isKey": true,
		"label": "Action"
	} as undefined,
	orderDetail: {
		"name": "orderDetail",
		"type": "id",
		"isKey": false,
		"label": "OrderDetail"
	} as FieldItemId,
	value: {
		"name": "value",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Value"
	} as FieldItemNum,
	item: {
		"name": "item",
		"isKey": false,
		"label": "Item"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.actionId, fields.action, fields.orderDetail, fields.value, fields.item, 
];

export const ui: UI = {
	label: "OrderAction",
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

export function render(item: OrderAction):JSX.Element {
	return <>{uqStringify(item)}</>;
};
