// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { ObjectAccountHistory } from "./JkMe";

/*--fields--*/
const fields = {
	ix: {
		"name": "ix",
		"type": "id",
		"isKey": false,
		"label": "Ix"
	} as FieldItemId,
	xi: {
		"name": "xi",
		"type": "id",
		"isKey": false,
		"label": "Xi"
	} as FieldItemId,
	value: {
		"name": "value",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Value"
	} as FieldItemNumber,
	opi: {
		"name": "opi",
		"type": "id",
		"isKey": false,
		"label": "Opi"
	} as FieldItemId,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.xi, fields.value, fields.opi, 
];

export const ui: UI = {
	label: "ObjectAccountHistory",
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

export function render(item: ObjectAccountHistory):JSX.Element {
	return <>{uqStringify(item)}</>;
};
