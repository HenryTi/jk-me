// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { DeliverDetail } from "./JkMe";

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
	orderDetail: {
		"name": "orderDetail",
		"type": "id",
		"isKey": false,
		"label": "OrderDetail"
	} as FieldItemId,
	quantity: {
		"name": "quantity",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Quantity"
	} as FieldItemNumber,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.main, fields.orderDetail, fields.quantity, 
];

export const ui: UI = {
	label: "DeliverDetail",
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

export function render(item: DeliverDetail):JSX.Element {
	return <>{uqStringify(item)}</>;
};
