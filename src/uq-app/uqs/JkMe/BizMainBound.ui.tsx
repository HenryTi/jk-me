// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { BizMainBound } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	bizMain: {
		"name": "bizMain",
		"type": "id",
		"isKey": true,
		"label": "BizMain"
	} as FieldItemId,
	post: {
		"name": "post",
		"isKey": true,
		"label": "Post"
	} as undefined,
	item: {
		"name": "item",
		"isKey": true,
		"label": "Item"
	} as undefined,
	to: {
		"name": "to",
		"type": "id",
		"isKey": true,
		"label": "To"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.bizMain, fields.post, fields.item, fields.to, 
];

export const ui: UI = {
	label: "BizMainBound",
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

export function render(item: BizMainBound):JSX.Element {
	return <>{uqStringify(item)}</>;
};