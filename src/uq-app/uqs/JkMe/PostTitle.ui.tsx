// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { PostTitle } from "./JkMe";

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
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.title, fields.vice, 
];

export const ui: UI = {
	label: "PostTitle",
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

export function render(item: PostTitle):JSX.Element {
	return <>{uqStringify(item)}</>;
};
