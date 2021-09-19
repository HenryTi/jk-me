import { CSupervise } from "supervise";
import { List, LMR, VPage } from "tonva-react";
import { ReturnGetProductSumByMonthRet } from "uq-app/uqs/JkMe";

export class VProductSumByMonth extends VPage<CSupervise> {
    header() { return '按月商品销售额排序'; }

    content() {
        return <div className="">
            <List items={this.controller.productSumByMonth} 
                item={{render: this.renderItem, onClick: this.onClick}} />
        </div>
    }

    private renderItem = (row: ReturnGetProductSumByMonthRet, index: number) => {
        let {product, value} = row;
        let {$serial} = row as any;
        return <LMR  className="px-3 py-2" 
            left={<div className="w-2c text-center mx-2 text-primary">{$serial}</div>} 
            right={<div>{value.toFixed(2)} 元</div>}>
                <div>{this.controller.uqs.JkProduct.ProductX.tv(product)}</div>
            </LMR>
    }

    private onClick = async (row: ReturnGetProductSumByMonthRet) => {
        alert(JSON.stringify(row));
    }
}
