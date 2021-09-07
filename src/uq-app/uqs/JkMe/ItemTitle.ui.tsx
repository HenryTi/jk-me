import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { ItemTitle } from "./JkMe";

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
	label: "ItemTitle",
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

export function render(item: ItemTitle):JSX.Element {
	return <>{uqStringify(item)}</>;
};
