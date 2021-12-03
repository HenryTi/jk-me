/* eslint-disable */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from 'tonwa-react';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { Res, uqStringify, setRes } from "tonwa-core";
	import { TuidResearch } from "./JkProduct";
	
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
	
	export function render(item: TuidResearch):JSX.Element {
		return <>{uqStringify(item)}</>;
	};
	