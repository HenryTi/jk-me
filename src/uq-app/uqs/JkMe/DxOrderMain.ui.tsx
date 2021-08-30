import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { DxOrderMain } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	costPriceSet: {
		"name": "costPriceSet",
		"isKey": false,
		"label": "CostPriceSet"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.costPriceSet, 
];

export const ui: UI = {
	label: "DxOrderMain",
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

export function render(item: DxOrderMain):JSX.Element {
	return <>{uqStringify(item)}</>;
};
