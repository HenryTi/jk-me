// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { ObjectAccountHistory } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	objectAccount: {
		"name": "objectAccount",
		"type": "id",
		"isKey": false,
		"label": "ObjectAccount"
	} as FieldItemId,
	value: {
		"name": "value",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Value"
	} as FieldItemNum,
	opi: {
		"name": "opi",
		"type": "id",
		"isKey": false,
		"label": "Opi"
	} as FieldItemId,
	historyFrom: {
		"name": "historyFrom",
		"type": "id",
		"isKey": false,
		"label": "HistoryFrom"
	} as FieldItemId,
	historyTo: {
		"name": "historyTo",
		"type": "id",
		"isKey": false,
		"label": "HistoryTo"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.objectAccount, fields.value, fields.opi, fields.historyFrom, fields.historyTo, 
];

export const ui: UI = {
	label: "ObjectAccountHistory",
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

export function render(item: ObjectAccountHistory):JSX.Element {
	return <>{uqStringify(item)}</>;
};
