// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { ObjectAccount } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	object: {
		"name": "object",
		"type": "id",
		"isKey": true,
		"label": "Object"
	} as FieldItemId,
	account: {
		"name": "account",
		"isKey": true,
		"label": "Account"
	} as undefined,
	balance: {
		"name": "balance",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Balance"
	} as FieldItemNumber,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.object, fields.account, fields.balance, 
];

export const ui: UI = {
	label: "ObjectAccount",
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

export function render(item: ObjectAccount):JSX.Element {
	return <>{uqStringify(item)}</>;
};
