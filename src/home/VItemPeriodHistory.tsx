import { List, LMR, VPage } from "tonva-react";
import { ReturnUserItemPeriodHistoryRet } from "uq-app/uqs/JkMe";
import { CHome } from "./CHome";

export class VItemPeriodHistory extends VPage<CHome> {
	header() {
        let {itemTitles, postTitles} = this.controller.cApp;
        let {itemPeriodSum} = this.controller.periodSum;
        let {post, item} = itemPeriodSum;
        return `${postTitles[post].title} - ${itemTitles[item].title}`;
    }
	content() {
        let {periodHistory} = this.controller.periodSum;
		return <div className="">
            <List items={periodHistory} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>;
    }

    private renderItem = (history: ReturnUserItemPeriodHistoryRet, index: number) => {
        let {itemTitles} = this.controller.cApp;
        let {date, value} = history;
        let {item} = this.controller.periodSum.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = new Date(date);
        let left = <div className="text-muted small">{d.getMonth()+1}月{String(100+d.getDate()).substr(1)}日</div>;
        let right = <div>{value.toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}></LMR>;
    }

    private onClickItem = (item: ReturnUserItemPeriodHistoryRet) => {
        let from: Date = item.date;
        let to: Date = new Date(from);
        to.setDate(to.getDate()+1);
        this.controller.showItemHistory(undefined, from, to);
    }
}