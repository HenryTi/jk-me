import { List, LMR, VPage } from "tonva-react";
import { ReturnUserItemHistoryRet } from "uq-app/uqs/JkMe";
import { CHome } from "./CHome";

export class VItemHistory extends VPage<CHome> {
	header() {
        let {itemTitles, postTitles} = this.controller.cApp;
        let {itemPeriodSum} = this.controller.periodSum;
        let {post, item} = itemPeriodSum;
        return `${postTitles[post].title} - ${itemTitles[item].title}`;
    }
	content() {
        let {history} = this.controller.periodSum;
		return <div className="">
            <List items={history} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>;
    }

    private renderItem = (history: ReturnUserItemHistoryRet, index: number) => {
        let {itemTitles} = this.controller.cApp;
        let {date, sumValue} = history;
        let {item} = this.controller.periodSum.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = new Date(date);
        let left = <div className="text-muted small">{d.getMonth()+1}月{String(100+d.getDate()).substr(1)}日</div>;
        let right = <div>{sumValue.toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}></LMR>;
    }

    private onClickItem = (item: ReturnUserItemHistoryRet) => {
        alert(JSON.stringify(item));
    }
}