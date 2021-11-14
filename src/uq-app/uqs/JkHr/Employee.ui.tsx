// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, UI, uqStringify } from "tonva-core";
import { Res, setRes, TFunc } from 'tonva-react';
import { TuidEmployee } from "./JkHr";

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

export function render(item: TuidEmployee):JSX.Element {
	return <>{uqStringify(item)}</>;
};
