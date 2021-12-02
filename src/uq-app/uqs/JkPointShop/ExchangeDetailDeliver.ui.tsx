// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonwa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { ExchangeDetailDeliver } from "./JkPointShop";

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
	deliverDone: {
		"name": "deliverDone",
		"type": "number",
		"isKey": false,
		"widget": "number",
		"label": "DeliverDone"
	} as FieldItemNumber,
	deliverTime: {
		"name": "deliverTime",
		"isKey": false,
		"label": "DeliverTime"
	} as undefined,
};
/*==fields==*/

const fieldArr: FieldItem[] = [
	fields.xi, fields.deliverDone, fields.deliverTime, 
];

export const ui: UI = {
	label: "ExchangeDetailDeliver",
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

export const t: TFunc = (str: string | JSX.Element): string | JSX.Element => {
	return res[str as string] ?? str;
}

export function render(item: ExchangeDetailDeliver): JSX.Element {
	return <>{uqStringify(item)}</>;
};
