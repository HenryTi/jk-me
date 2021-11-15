import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { OrderMain } from "./JkMe";

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
	webUser: {
		"name": "webUser",
		"type": "id",
		"isKey": false,
		"label": "WebUser"
	} as FieldItemId,
	customerAccount: {
		"name": "customerAccount",
		"type": "id",
		"isKey": false,
		"label": "CustomerAccount"
	} as FieldItemId,
	seller: {
		"name": "seller",
		"type": "id",
		"isKey": false,
		"label": "Seller"
	} as FieldItemId,
	currency: {
		"name": "currency",
		"type": "id",
		"isKey": false,
		"label": "Currency"
	} as FieldItemId,
	sumAmount: {
		"name": "sumAmount",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "SumAmount"
	} as FieldItemNum,
	stamp: {
		"name": "stamp",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Stamp"
	} as FieldItemInt,
	$create: {
		"name": "$create",
		"isKey": false,
		"label": "$create"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.no, fields.webUser, fields.customerAccount, fields.seller, fields.currency, fields.sumAmount, fields.stamp, fields.$create, 
];

export const ui: UI = {
	label: "OrderMain",
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

export function render(item: OrderMain):JSX.Element {
	return <>{uqStringify(item)}</>;
};
