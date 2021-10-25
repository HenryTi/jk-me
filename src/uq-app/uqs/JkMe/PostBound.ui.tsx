// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { PostBound } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	action: {
		"name": "action",
		"isKey": false,
		"label": "Action"
	} as undefined,
	post: {
		"name": "post",
		"isKey": false,
		"label": "Post"
	} as undefined,
	postItem: {
		"name": "postItem",
		"isKey": false,
		"label": "PostItem"
	} as undefined,
	item: {
		"name": "item",
		"isKey": false,
		"label": "Item"
	} as undefined,
	ratio: {
		"name": "ratio",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Ratio"
	} as FieldItemNum,
	memo: {
		"name": "memo",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Memo"
	} as FieldItemInt,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.action, fields.post, fields.postItem, fields.item, fields.ratio, fields.memo, 
];

export const ui: UI = {
	label: "PostBound",
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

export function render(item: PostBound):JSX.Element {
	return <>{uqStringify(item)}</>;
};