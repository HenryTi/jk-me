// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItemNumber, FieldItemString, FieldItemInt, FieldItemId, FieldItem, UI } from 'tonva-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { Hours } from "./BzHelloTonva";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	onsite: {
		"name": "onsite",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Onsite"
	} as FieldItemInt,
	offsite: {
		"name": "offsite",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Offsite"
	} as FieldItemInt,
	break: {
		"name": "break",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Break"
	} as FieldItemInt,
	sick: {
		"name": "sick",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Sick"
	} as FieldItemInt,
	over: {
		"name": "over",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "Over"
	} as FieldItemInt,
	noTimeLog: {
		"name": "noTimeLog",
		"type": "integer",
		"isKey": false,
		"widget": "updown",
		"label": "NoTimeLog"
	} as FieldItemInt,
};
/*==fields==*/

export const fieldArr: FieldItem[] = [
	fields.onsite, fields.offsite, fields.break, fields.sick, fields.over, fields.noTimeLog, 
];

export const ui: UI = {
	label: "Hours",
	fieldArr,
	fields,
};

export const res: Res<any> = {
	$zh: {
	},
	$en: {
	}
};

export function render(item: Hours):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
