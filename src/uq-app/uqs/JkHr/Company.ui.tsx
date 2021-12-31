// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonwa";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonwa-core";
import { TuidCompany } from "./JkHr";

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

export function render(item: TuidCompany): JSX.Element {
	return <>{uqStringify(item)}</>;
};