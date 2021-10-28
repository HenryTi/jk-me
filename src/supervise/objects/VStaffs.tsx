import { LMR } from "tonva-react";
import { cnAmount } from "tools";
import { Item } from "uq-app/uqs/JkMe";
import { CStaffs, StaffRow } from "./CStaffs";
import { VObjects } from "./VObjects";

export class VStaffs extends VObjects<CStaffs> {
    protected renderItem(v:StaffRow, index:number): JSX.Element {
        let {staff, monthValuesArr} = v;
        let right = <div className="d-block">
            {monthValuesArr.map((v, index) => {
                let {item, dThis, mThis, mLast} = v;
                if (mThis === undefined && mLast === undefined) return null;
                let {itemTitles} = this.controller.cApp;
                let {title} = itemTitles[item];
                return <div key={index} className="d-flex">
                    <div className="flex-fill text-end">{title}</div>
                    <div>{this.vValue(dThis)}</div>
                    <div>{this.vValue(mThis)}</div>
                    <div>{this.vValue(mLast)}</div>
                </div>
            })}
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            {this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}
        </LMR>;
    }

    protected renderListHeader(): JSX.Element {
        return <div>
            <div className="d-flex px-3 py-3 border-bottom border-primary">
                <div className="flex-fill">员工</div>
                <div className={cnAmount}>今天</div>
                <div className={cnAmount}>本月</div>
                <div className={cnAmount}>上月</div>
            </div>
            {this.renderListFooter()}
        </div>;
    }

    protected renderListFooter(): JSX.Element {
        let {sum} = this.controller;
        return <div className="d-flex px-3 py-3">
            <div className="flex-fill fw-bold">合计</div>
            <div>
                {sum.map((v, index) => {
                    let {item, dThis, mThis, mLast} = v;
                    if ((mThis === 0 || mThis === undefined) 
                        && (mLast === 0 || mLast === undefined)) return null;
                    let {itemTitles} = this.controller.cApp;
                    let {title} = itemTitles[item];
                    return <div key={index} className="d-flex">
                        <div className="flex-fill text-end">{title}</div>
                        <div>{this.vValue(dThis)}</div>
                        <div>{this.vValue(mThis)}</div>
                        <div>{this.vValue(mLast)}</div>
                    </div>
                })}
            </div>
        </div>;
    }

    private vValue(amount:number):JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[Item.orderAmount];
        return <div className={cnAmount}>
            {((amount??0) as number).toFixed(fixed)} 
            <small className="text-muted">{unit}</small>
        </div>;
    }

    protected onClickItem(v:any) {
        let {obj, staff} = v;
        let pageTop = <div className="px-3 py-4">
            <div>职员 <b>{this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}</b></div>
        </div>;
        this.controller.showObjectPortal(obj, pageTop);
    }
}

function renderEmployee(employee: any):JSX.Element {
    let {name} = employee;
    return <>{name}</>;
}
