// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonwa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { ReceiveDetail } from "./JkPointShop";

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
	amount: {
		"name": "amount",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Amount"
	} as FieldItemNumber,
	createDate: {
		"name": "createDate",
		"isKey": false,
		"label": "CreateDate"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.main, fields.orderDetail, fields.amount, fields.createDate, 
];

export const ui: UI = {
	label: "ReceiveDetail",
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

export function render(item: ReceiveDetail): JSX.Element {
	return <>{uqStringify(item)}</>;
};
