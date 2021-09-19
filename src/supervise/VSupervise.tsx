import { List, VPage } from "tonva-react";
import { EnumUserObjectRelation, Item, ReturnGetUserSuperviseItemRet, ReturnGetUserSuperviseObjectRet } from "uq-app/uqs/JkMe";
import { CSupervise } from "./CSupervise";

export class VSupervise extends VPage<CSupervise> {
    superviseObjects: ReturnGetUserSuperviseObjectRet[];
    superviseItems: ReturnGetUserSuperviseItemRet[];

    header() {return '团队'}
    content() {
        const queryList: {
            caption: string;
            action: () => void;
        }[] = [
            {
                caption: '按月商品销售额排序',
                action: this.controller.showProductSumByMonth,
            }
        ];
        let {superviseObjects, superviseItems} = this.controller.cApp;
    
        return <div>
            {
                queryList.map((v, index) => {
                    let {caption, action} = v;
                    return <div key={index} className="px-3 py-2 mb-1 bg-white cursor-pointer" onClick={action}>
                        {caption}
                    </div>;
                })
            }

            <List items={superviseObjects} 
                item={{render: this.renderSuperviseObject, onClick: this.onClickSuperviseObject}} />
            <div className="py-1"></div>
            <List items={superviseItems} 
                item={{render: this.renderSuperviseItem, onClick: this.onClickSuperviseItem}} />
        </div>;
    }

    private renderSuperviseObject = (row: ReturnGetUserSuperviseObjectRet, index: number) => {
        let {object, relation} = row;
        let content: any;
        switch (Number(relation) as EnumUserObjectRelation) {
            case EnumUserObjectRelation.other:
                content = <>{object}</>;
                break;
            case EnumUserObjectRelation.group:
                content = this.controller.uqs.JkMe.IDLocalRender(object);
                break;
        }
        return <div className="px-3 py-2">
            {content}
        </div>;
    }
    
    private onClickSuperviseObject = (row: ReturnGetUserSuperviseObjectRet) => {
        alert(JSON.stringify(row));
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
