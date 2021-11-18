// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonva-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { ObjectPost } from "./JkMe";

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
		"isKey": true,
		"label": "Post"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.post, 
];

export const ui: UI = {
	label: "ObjectPost",
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

export function render(item: ObjectPost):JSX.Element {
	return <>{uqStringify(item)}</>;
};
