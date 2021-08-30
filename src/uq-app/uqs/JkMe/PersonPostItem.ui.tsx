import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { PersonPostItem } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	person: {
		"name": "person",
		"type": "id",
		"isKey": true,
		"label": "Person"
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
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.person, fields.post, fields.item, 
];

export const ui: UI = {
	label: "PersonPostItem",
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

export function render(item: PersonPostItem):JSX.Element {
	return <>{uqStringify(item)}</>;
};
