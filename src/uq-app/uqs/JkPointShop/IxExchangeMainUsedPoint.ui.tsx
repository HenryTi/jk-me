// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonva-view";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { IxExchangeMainUsedPoint } from "./JkPointShop";

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
	point: {
		"name": "point",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "Point"
	} as FieldItemNumber,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.xi, fields.point, 
];

export const ui: UI = {
	label: "IxExchangeMainUsedPoint",
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

export function render(item: IxExchangeMainUsedPoint):JSX.Element {
	return <>{uqStringify(item)}</>;
};
