import { CObjectPortal } from "portal/CObjectPortal";
import { LMR } from "tonva-react";
import { cnAmount } from "tools";
import { Item } from "uq-app/uqs/JkMe";
import { CStaffs } from "./CStaffs";
import { VObjects } from "./VObjects";

export class VStaffs extends VObjects<CStaffs> {
    protected renderItem(v:any, index:number): JSX.Element {
        let {id, staff, amountThisMonth, amountLastMonth} = v;
        let right = <div className="d-flex align-items-center">
            {this.vAmount(amountThisMonth)}
            {this.vAmount(amountLastMonth)}
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            {this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}
        </LMR>;
    }

    protected renderListHeader(): JSX.Element {
        return <div>
            <div className="d-flex px-3 py-3 border-bottom border-primary">
                <div className="flex-fill">员工</div>
                <div className={cnAmount}>本月</div>
                <div className={cnAmount}>上月</div>
            </div>
            {this.renderListFooter()}
        </div>;
    }

    protected renderListFooter(): JSX.Element {
        let {sumThisMonth, sumLastMonth} = this.controller;
        return <div className="d-flex px-3 py-3">
            <div className="flex-fill fw-bold">合计</div>
            {this.vAmount(sumThisMonth)}
            {this.vAmount(sumLastMonth)}
        </div>;
    }

    private vAmount(amount:number):JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[Item.orderAmount];
        return <div className={cnAmount}>
            {((amount??0) as number).toFixed(fixed)} 
            <small className="text-muted">{unit}</small>
        </div>;
    }

    protected onClickItem(v:any) {
        let {opi, staff} = v;
        let pageTop = <div className="px-3 py-4">
            <div>职员 <b>{this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}</b></div>
        </div>;
        this.controller.showObjectPortal(opi, pageTop);
    }
}

function renderEmployee(employee: any):JSX.Element {
    let {name} = employee;
    return <>{name}</>;
}
