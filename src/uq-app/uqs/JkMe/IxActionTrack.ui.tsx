// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { IxActionTrack } from "./JkMe";

/*--fields--*/
const fields = {
	ixx: {
		"name": "ixx",
		"type": "id",
		"isKey": false,
		"label": "Ixx"
	} as FieldItemId,
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
	stamp: {
		"name": "stamp",
		"isKey": false,
		"label": "Stamp"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.ixx, fields.xi, fields.stamp, 
];

export const ui: UI = {
	label: "IxActionTrack",
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

export function render(item: IxActionTrack):JSX.Element {
	return <>{uqStringify(item)}</>;
};
