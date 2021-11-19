// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItemNumber, FieldItemString, FieldItemInt, FieldItemId, FieldItem, UI, TFunc } from 'tonva-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { Achieve } from "./BzHelloTonva";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	saleAmount: {
		"name": "saleAmount",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "SaleAmount"
	} as FieldItemNumber,
	deliver: {
		"name": "deliver",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Deliver"
	} as FieldItemNumber,
};
/*==fields==*/

export const fieldArr: FieldItem[] = [
	fields.saleAmount, fields.deliver, 
];

export const ui: UI = {
	label: "Achieve",
	fieldArr,
	fields,
};

export const res: Res<any> = {
	$zh: {
	},
	$en: {
	}
};

export function render(item: Achieve):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
