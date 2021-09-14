import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { DxOrderDetailFlag } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	flagBottomPrice: {
		"name": "flagBottomPrice",
		"isKey": false,
		"label": "FlagBottomPrice"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.flagBottomPrice, 
];

export const ui: UI = {
	label: "DxOrderDetailFlag",
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

export function render(item: DxOrderDetailFlag):JSX.Element {
	return <>{uqStringify(item)}</>;
};
