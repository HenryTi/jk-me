import { observer } from "mobx-react";
import React from "react";
import { CSupervise } from "supervise";
import { FA, List, LMR, VPage } from "tonva-react";
import { ReturnGetProductSumByMonthRet } from "uq-app/uqs/JkMe";

abstract class VSumByMonth extends VPage<CSupervise> {
    header() { return this.controller.monthSum.vCaption; }

    content() {
        return <div className="">
            {
                React.createElement(observer(() => <>
                    {this.renderDate()}
                    <List items={this.controller.monthSum.list} 
                        item={{render: this.renderItem, onClick: this.onClick}} />
                </>))
            }
        </div>;
    }
    
    protected abstract renderId(id: number): JSX.Element;

    private renderDate() {
        let {month, hasNext, prev, next} = this.controller.monthSum;
        let left = <div className="cursor-pointer px-5 py-3" onClick={prev}><FA name="angle-left" /></div>;
        let right = <div className={' px-5 py-3 ' + (hasNext? ' cursor-pointer ':' text-light ')} onClick={next}><FA name="angle-right" /></div>
        return <div className="d-flex justify-content-center">
            <div className="d-flex mx-auto">
                {left}
                <div className="text-center py-3">{month.getFullYear()}年{month.getMonth()+1}月</div>
                {right}
            </div>
        </div>;
	}

    private renderItem = (row: ReturnGetProductSumByMonthRet, index: number) => {
        let {id, value} = row;
        let {$serial} = row as any;
        return <LMR  className="pe-2 pe-sm-3 py-2" 
            left={<div className="w-min-2c text-center text-primary me-1 small">{$serial}</div>} 
            right={<div className="ms-1">{(value??0).toFixed(2)}<small className="text-muted">元</small></div>}>
                <div>{this.renderId(id)}</div>
            </LMR>
    }

    private onClick = async (row: ReturnGetProductSumByMonthRet) => {
        alert(JSON.stringify(row));
    }
}

export class VProductSumByMonth extends VSumByMonth {
    protected renderId(id: number) {
        return this.controller.uqs.JkProduct.ProductX.tv(id);
    }
}

export class VCustomerSumByMonth extends VSumByMonth {
    protected renderId(id: number) {
        return <>客户{id}</>;
    }
}
