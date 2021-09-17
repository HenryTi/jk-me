// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc, UI, uqStringify } from "tonva-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemInt, FieldItemNum, FieldItemString, FieldItemId } from "tonva-react";
import { ItemReadyStates } from "./JkMe";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	readyStates: {
		"name": "readyStates",
		"isKey": false,
		"label": "ReadyStates"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.readyStates, 
];

export const ui: UI = {
	label: "ItemReadyStates",
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

export function render(item: ItemReadyStates):JSX.Element {
	return <>{uqStringify(item)}</>;
};
