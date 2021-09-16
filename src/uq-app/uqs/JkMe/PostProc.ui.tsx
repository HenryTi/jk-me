// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { PostProc } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	post: {
		"name": "post",
		"isKey": false,
		"label": "Post"
	} as undefined,
	action: {
		"name": "action",
		"isKey": false,
		"label": "Action"
	} as undefined,
	readyStates: {
		"name": "readyStates",
		"isKey": false,
		"label": "ReadyStates"
	} as undefined,
	item: {
		"name": "item",
		"isKey": false,
		"label": "Item"
	} as undefined,
	itemToObj: {
		"name": "itemToObj",
		"isKey": false,
		"label": "ItemToObj"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.post, fields.action, fields.readyStates, fields.item, fields.itemToObj, 
];

export const ui: UI = {
	label: "PostProc",
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

export function render(item: PostProc):JSX.Element {
	return <>{uqStringify(item)}</>;
};
