import { LMR } from "tonva-react";
import { Item } from "uq-app/uqs/JkMe";
import { CStaffs } from "./CStaffs";
import { VObjects } from "./VObjects";

export class VStaffs extends VObjects<CStaffs> {
    protected renderItem(v:any, index:number): JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[Item.orderAmount];
        let {id, staff, amount} = v;
        let right = <span>{((amount??0) as number).toFixed(fixed)} {unit}</span>;
        return <LMR className="px-3 py-2" right={right}>
            {this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}
        </LMR>;
    }
}

function renderEmployee(employee: any):JSX.Element {
    let {name} = employee;
    return <>{name}</>;
}
