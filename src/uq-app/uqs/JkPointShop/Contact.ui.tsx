// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, setRes, TFunc } from 'tonva-react';
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, UI, uqStringify } from "tonva-core";
import { TuidContact } from "./JkPointShop";

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

export function render(item: TuidContact):JSX.Element {
	return <>{uqStringify(item)}</>;
};
