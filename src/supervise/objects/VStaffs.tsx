import { LMR } from "tonva-react";
import { Item } from "uq-app/uqs/JkMe";
import { CStaffs } from "./CStaffs";
import { VObjects } from "./VObjects";

export class VStaffs extends VObjects<CStaffs> {
    protected renderItem(v:any, index:number): JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[Item.orderAmount];
        let {id, staff, amountThisMonth, amountLastMonth} = v;
        let right = <div className="d-flex align-items-center">
            <div className="w-10c text-end">{((amountThisMonth??0) as number).toFixed(fixed)} {unit}</div>
            <div className="w-10c text-end">{((amountLastMonth??0) as number).toFixed(fixed)} {unit}</div>
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            {this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}
        </LMR>;
    }

    protected renderListHeader(): JSX.Element {
        return <div>
            <div className="d-flex px-3 py-3 border-bottom border-primary">
                <div className="flex-fill">员工</div>
                <div className="w-10c text-end">本月</div>
                <div className="w-10c text-end">上月</div>
            </div>
            {this.renderListFooter()}
        </div>;
    }

    protected renderListFooter(): JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[Item.orderAmount];
        let {sumThisMonth, sumLastMonth} = this.controller;
        return <div className="d-flex px-3 py-3">
            <div className="flex-fill text-end">合计</div>
            <div className="w-10c text-end">{((sumThisMonth??0) as number).toFixed(fixed)} {unit}</div>
            <div className="w-10c text-end">{((sumLastMonth??0) as number).toFixed(fixed)} {unit}</div>
        </div>;
    }
}

function renderEmployee(employee: any):JSX.Element {
    let {name} = employee;
    return <>{name}</>;
}
