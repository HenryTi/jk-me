// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { DxBizOp } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	type: {
		"name": "type",
		"isKey": false,
		"label": "Type"
	} as undefined,
	biz: {
		"name": "biz",
		"type": "id",
		"isKey": false,
		"label": "Biz"
	} as FieldItemId,
	value: {
		"name": "value",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Value"
	} as FieldItemNum,
	done: {
		"name": "done",
		"isKey": false,
		"label": "Done"
	} as undefined,
	stamp: {
		"name": "stamp",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Stamp"
	} as FieldItemInt,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.type, fields.biz, fields.value, fields.done, fields.stamp, 
];

export const ui: UI = {
	label: "DxBizOp",
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

export function render(item: DxBizOp):JSX.Element {
	return <>{uqStringify(item)}</>;
};
