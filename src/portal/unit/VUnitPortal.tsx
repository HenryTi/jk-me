import { VPeriodSum } from "../VPortal";
import { CUnitPortal } from "./CUnitPortal";
import { Item } from "uq-app/uqs/JkMe";
import { FA, LMR } from "tonva-react";

const nf = new Intl.NumberFormat('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});

export class VUnitPortal extends VPeriodSum<CUnitPortal> {
    header() { return '详情'; }
    content() {
        return <div>
            <div>{/*this.controller.pageTop*/}</div>
            <div>{this.controller.renderVPortal()}</div>
        </div>;        
    }

    protected renderItem = (row: any, index: number) => {
        let {item, value} = row;
        let {itemTitles} = this.controller.cApp;
		let {title, vice, unit, fixed} = itemTitles[item as Item];
        let left = <div>
            <FA className="text-info me-3" name="lightbulb-o" />
            {title}
        </div>;
        let right = <div>
            {
                value<0?
                <span className="text-danger">({nf.format(-value)})</span>
                :
                <>{nf.format(value??0)}</>
            } 
            <small className="text-muted ms-1">{unit}</small>
        </div>;
        return <LMR className="py-2 px-3 d-flex align-items-center"
            left={left} right={right} />;
    }
}
