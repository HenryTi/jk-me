import { List, LMR, VPage } from "tonva-react";
import { ReturnUserItemPeriodHistoryRet } from "uq-app/uqs/JkMe";
import { CPeriodSum } from "./CPortal";

abstract class VItemPeriodHistory extends VPage<CPeriodSum> {
	header() {
        let {itemTitles, postTitles} = this.controller.cApp;
        let {itemPeriodSum} = this.controller;
        let {post, item} = itemPeriodSum;
        return `${postTitles[post].title} - ${itemTitles[item].title}`;
    }
	content() {
        let {periodHistory} = this.controller;
		return <div className="">
            <List items={periodHistory} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>;
    }

    private renderItem = (history: ReturnUserItemPeriodHistoryRet, index: number) => {
        let {itemTitles} = this.controller.cApp;
        let {date, value} = history;
        let {item} = this.controller.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = new Date(date);
        let left = <div className="text-muted small">{this.renderDate(d)}</div>;
        let right = <div>{(value??0).toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}></LMR>;
    }

    private onClickItem = async (item: ReturnUserItemPeriodHistoryRet) => {
        await this.clickItem(item);
    }

    protected abstract renderDate(date: Date): JSX.Element;
    protected abstract clickItem(item: ReturnUserItemPeriodHistoryRet): Promise<void>;
}

export class VItemDayHistory extends VItemPeriodHistory {
    protected renderDate(d: Date): JSX.Element {
        return <>{d.getMonth()+1}月{String(100+d.getDate()).substr(1)}日</>;
    }

    protected async clickItem(item: ReturnUserItemPeriodHistoryRet): Promise<void> {
        let from: Date = item.date;
        let to: Date = new Date(from);
        to.setDate(to.getDate()+1);
        await this.controller.showItemHistory(undefined, from, to);
    }
}

export class VItemMonthHistory extends VItemPeriodHistory {
    protected renderDate(d: Date): JSX.Element {
        return <>{d.getMonth()+1}月</>;
    }

    protected async clickItem(item: ReturnUserItemPeriodHistoryRet): Promise<void> {
        let from: Date = item.date;
        let to: Date = new Date(from);
        to.setMonth(to.getMonth()+1);
        await this.controller.showItemDayHistory(undefined, from, to);
    }
}
