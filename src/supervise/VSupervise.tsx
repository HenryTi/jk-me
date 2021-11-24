import { FA, List, LMR, VPage } from "tonva-view";
import { EnumRoleOp
    , ReturnGetUserSuperviseItemRet } from "uq-app/uqs/JkMe";
import { Item  } from "uq-app/uqs/JkMe/JkMe";
import { CSupervise } from "./CSupervise";

interface VIndexProps {
    icon?:string; 
    iconColor?:string;
    caption:string; 
    action: ()=>void;
}

const VIndex = ({icon, caption, action, iconColor}:VIndexProps) => {
    let fa = <FA name={icon??'chevron-circle-right'} className={'me-3 ' + (iconColor??' text-success ')} />;
    let right = <FA name="angle-right" />
    return <LMR left={fa} right={right}
        className="px-3 py-2 mb-1 bg-white cursor-pointer align-items-center" 
        onClick={action}>
        {caption}
    </LMR>
}

export class VSupervise extends VPage<CSupervise> {
    private renderOpTest = () => {
        const queryList: {
            caption: string;
            item: Item;
            action: (caption:string, item: Item) => void;
        }[] = [
            {
                caption: '按月商品销售额排序',
                item: Item.orderAmount,
                action: this.controller.showProductSumByMonth,
            },
            {
                caption: '按月商品毛利润排序',
                item: Item.orderProfit,
                action: this.controller.showProductSumByMonth,
            },
            {
                caption: '按月客户销售额排序',
                item: Item.orderAmount,
                action: this.controller.showCustomerSumByMonth,
            },
            {
                caption: '按月客户毛利润排序',
                item: Item.orderProfit,
                action: this.controller.showCustomerSumByMonth,
            },
        ];
        let {superviseItems} = this.controller;
        return <>
            <div className="mb-4">
                <div className="my-2 mx-1 border border-info rounded">
                    <div className="p-3 border-bottom border-info bg-white">
                        <b>公司业务</b>
                    </div>
                    <div>
                        {this.controller.renderVUnitSum()}
                    </div>
                </div>
            </div>
            {this.controller.cObjectsArr.map((v, index) => {
                return <VIndex key={index} 
                    action={() => v.loadAndShowList()}
                    caption={v.header()}
                    iconColor="text-primary" />;
                /*
                return <div key={index} className="px-3 py-2 mb-1 bg-white cursor-pointer" 
                    onClick={() => v.loadAndShowList()}>
                    {v.header()}
                </div>
                */
            })}
            <VIndex action={this.controller.showAccounts}
                caption="账户余额列表"
                iconColor="text-primary" />
            <div className="mb-3" />
            {
                queryList.map((v, index) => {
                    let {caption, item, action} = v;
                    return <VIndex key={index} iconColor="text-danger"
                        caption={caption} 
                        action={()=>action(caption, item)} />;
                    /*
                    return <div key={index} 
                        className="px-3 py-2 mb-1 bg-white cursor-pointer" 
                        onClick={() => action(caption, item)}>
                        {caption}
                    </div>;
                    */
                })
            }
            <div className="mb-3" />
            <List items={superviseItems} none={null}
                item={{render: this.renderSuperviseItem, onClick: this.onClickSuperviseItem}} />
        </>;
        /*
            <List items={superviseObjects} 
            item={{render: this.renderSuperviseObject, onClick: this.onClickSuperviseObject}} />
        <div className="mb-3" />
        */
}

    private opRenders: {[key in EnumRoleOp]: () => JSX.Element} = {
        [EnumRoleOp.test]: this.renderOpTest,
    }

    superviseItems: ReturnGetUserSuperviseItemRet[];

    header() {return '团队'}
    content() {    
        return <div>
            {
                this.controller.cApp.ops.map((v, index) => {
                    let {op} = v;
                    return <div key={index} className="py-2">
                        {this.opRenders[op]()}
                    </div>;
                })
            }
        </div>;
    }

    private renderSuperviseItem = (row: ReturnGetUserSuperviseItemRet, index: number) => {
        let {item} = row;
        let {itemTitles} = this.controller.cApp;
		let {title, vice} = itemTitles[item as Item];
        return <div className="px-3 py-2 align-items-center">
            全公司{title} <small className="text-muted ms-3">{vice}</small>
        </div>;
    }
    
    private onClickSuperviseItem = (row: ReturnGetUserSuperviseItemRet) => {
        this.controller.showItemSumHistory(row.item);
    }
}
