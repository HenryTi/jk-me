// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI } from 'tonva-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes, TFunc } from "tonva-core";
import { TuidStuff } from "./JkProduct";

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

export function render(item: TuidStuff):JSX.Element {
	return <>{uqStringify(item)}</>;
};
