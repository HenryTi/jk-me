/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FieldItem, FieldItemNumber, FieldItemString, FieldItemId, FieldItemInt, UI, TFunc } from "tonva-view";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Res, uqStringify, setRes } from "tonva-core";
import { TuidProductX } from "./JkProduct";

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

export function render(item: TuidProductX):JSX.Element {
	let {description, descriptionC, imageUrl, no} = item;
	return <div>
		<div>{no} {descriptionC}</div>
		{
			descriptionC === description? 
				null :
				<div className="small text-muted">{description}</div>
		}
	</div>;
};
