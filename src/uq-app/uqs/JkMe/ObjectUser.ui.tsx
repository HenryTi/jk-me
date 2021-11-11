import { Res, setRes, TFunc, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UI, FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-core";
import { ObjectUser } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	user: {
		"name": "user",
		"type": "id",
		"isKey": true,
		"label": "User"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.user, 
];

export const ui: UI = {
	label: "ObjectUser",
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

export function render(item: ObjectUser):JSX.Element {
	return <>{uqStringify(item)}</>;
};
