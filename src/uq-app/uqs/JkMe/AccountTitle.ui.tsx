// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { AccountTitle } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	title: {
		"name": "title",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Title"
	} as FieldItemString,
	vice: {
		"name": "vice",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Vice"
	} as FieldItemString,
	unit: {
		"name": "unit",
		"type": "string",
		"isKey": false,
		"widget": "string",
		"label": "Unit"
	} as FieldItemString,
	fixed: {
		"name": "fixed",
		"isKey": false,
		"label": "Fixed"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.title, fields.vice, fields.unit, fields.fixed, 
];

export const ui: UI = {
	label: "AccountTitle",
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

export function render(item: AccountTitle):JSX.Element {
	return <>{uqStringify(item)}</>;
};
