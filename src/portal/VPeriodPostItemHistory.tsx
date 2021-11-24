import { List, LMR, VPage } from "tonva-view";
import { ReturnGetObjectItemPeriodHistoryRet } from "uq-app/uqs/JkMe";
import { CPortal } from "./CPortal";

abstract class VPeriodPostItemHistory extends VPage<CPortal> {
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

    private renderItem = (history: ReturnGetObjectItemPeriodHistoryRet, index: number) => {
        let {itemTitles} = this.controller.cApp;
        let {date, value} = history;
        let {item} = this.controller.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = new Date(date);
        let left = <div className="text-muted small">{this.renderDate(d)}</div>;
        let right = <div>{(value??0).toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}></LMR>;
    }

    private onClickItem = async (item: ReturnGetObjectItemPeriodHistoryRet) => {
        await this.clickItem(item);
    }

    protected abstract renderDate(date: Date): JSX.Element;
    protected abstract clickItem(item: ReturnGetObjectItemPeriodHistoryRet): Promise<void>;
}

export class VDayPostItemHistory extends VPeriodPostItemHistory {
    protected renderDate(d: Date): JSX.Element {
        return <>{d.getMonth()+1}月{String(100+d.getDate()).substr(1)}日</>;
    }

    protected async clickItem(item: ReturnGetObjectItemPeriodHistoryRet): Promise<void> {
        let from: Date = item.date;
        let to: Date = new Date(from);
        to.setDate(to.getDate()+1);
        await this.controller.showPostItemHistory(undefined, from, to);
    }
}

export class VMonthPostItemHistory extends VPeriodPostItemHistory {
    protected renderDate(d: Date): JSX.Element {
        return <>{d.getMonth()+1}月</>;
    }

    protected async clickItem(item: ReturnGetObjectItemPeriodHistoryRet): Promise<void> {
        let from: Date = item.date;
        let to: Date = new Date(from);
        to.setMonth(to.getMonth()+1);
        await this.controller.showDayPostItemHistory(undefined, from, to);
    }
}
