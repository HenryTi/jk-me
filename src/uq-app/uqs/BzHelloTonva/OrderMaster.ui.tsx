// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItemString, FieldItemInt, FieldItemId, FieldItem, UI, TFunc } from "tonva-view";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { OrderMaster } from "./BzHelloTonva";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	no: {
		"name": "no",
		"type": "string",
		"isKey": true,
		"widget": "string",
		"label": "No"
	} as FieldItemString,
	customer: {
		"name": "customer",
		"type": "id",
		"isKey": false,
		"label": "Customer"
	} as FieldItemId,
};
/*==fields==*/

export const fieldArr: FieldItem[] = [
	fields.no, fields.customer, 
];

export const ui: UI = {
	label: "OrderMaster",
	fieldArr,
	fields,
};

export const res: Res<any> = {
	$zh: {
	},
	$en: {
	}
};

export function render(item: OrderMaster):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
