// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItemInt, FieldItemId, FieldItem, UI, TFunc } from "tonva-view";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { Tag } from "./BzHelloTonva";

/*--fields--*/
const fields = {
	id: {
		"name": "id",
		"type": "id",
		"isKey": false,
		"label": "Id"
	} as FieldItemId,
	parent: {
		"name": "parent",
		"type": "integer",
		"isKey": true,
		"widget": "updown",
		"label": "Parent"
	} as FieldItemInt,
	name: {
		"name": "name",
		"isKey": true,
		"label": "Name"
	} as undefined,
};
/*==fields==*/

export const fieldArr: FieldItem[] = [
	fields.parent, fields.name, 
];

export const ui: UI = {
	label: "Tag",
	fieldArr,
	fields,
};

export const res: Res<any> = {
	$zh: {
	},
	$en: {
	}
};

export function render(item: Tag):JSX.Element {
	return <>{JSON.stringify(item)}</>;
};
