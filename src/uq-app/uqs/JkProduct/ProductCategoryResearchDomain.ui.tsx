// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonva-view";
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { Res, uqStringify, setRes } from "tonva-core";
	import { ProductCategoryResearchDomain } from "./JkProduct";
	
	/*--fields--*/
	const fields = {
	};
	/*==fields==*/
	
	const fieldArr: FieldItem[] = [
	];
	
	export const ui: UI = {
		label: "ProductCategoryResearchDomain",
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
	
	export function render(item: ProductCategoryResearchDomain):JSX.Element {
		return <>{uqStringify(item)}</>;
	};
	