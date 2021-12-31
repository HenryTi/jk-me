import { List, LMR, VPage } from "tonwa-react";
import { renderNum } from "tools";
import { Item, ReturnGetSuperviseObjectsRet } from "uq-app/uqs/JkMe";
import { CPortal } from "./CPortal";

export class VSuperviseObjects extends VPage<CPortal> {
    header(): string | boolean | JSX.Element {
        let { cApp, itemPeriodSum } = this.controller;
        let { postTitles, itemTitles } = cApp;
        let { post, item } = itemPeriodSum;
        if (post === 0) return itemTitles[item].title;
        return `${postTitles[post].title} - ${itemTitles[item].title}`;
    }

    content(): JSX.Element {
        return <div className="py-0">
            <List items={this.controller.superviseObjects} item={{ render: this.renderItem, onClick: this.onClickItem }} />
        </div>;
    }

    private renderItem = (row: ReturnGetSuperviseObjectsRet, index: number) => {
        let { itemTitles } = this.controller.cApp;
        let { opi, item, post, object, staff, value, ratioValue } = row;
        let {/*title, vice, */unit, fixed } = itemTitles[item as Item];
        return <div className="px-3 py-2 d-block">
            <div>{this.controller.uqs.JkHr.Employee.tv(staff, renderEmployee)}</div>
            <div>opi: {opi} item: {item} post: {post} object: {object} staff: {staff} </div>
            <LMR left={<div>{renderNum(value, unit, fixed)}</div>} right={<div>{renderNum(ratioValue, unit, fixed)}</div>} />
        </div>;
    }

    private onClickItem = (row: ReturnGetSuperviseObjectsRet) => {
        alert(JSON.stringify(row));
    }
}

function renderEmployee(employee: any): JSX.Element {
    let { name } = employee;
    return <>{name}</>;
}
