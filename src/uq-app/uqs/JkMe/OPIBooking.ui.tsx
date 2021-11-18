// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { OPIBooking } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	bizOpType: {
		"name": "bizOpType",
		"isKey": false,
		"label": "BizOpType"
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
	} as FieldItemNumber,
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
	fields.bizOpType, fields.post, fields.postItem, fields.item, fields.ratio, fields.memo, 
];

export const ui: UI = {
	label: "OPIBooking",
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

export function render(item: OPIBooking):JSX.Element {
	return <>{uqStringify(item)}</>;
};
