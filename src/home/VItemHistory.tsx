import { dateFromMinuteId, EasyTime, List, LMR, VPage } from "tonva-react";
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
        let {minuteId, value, biz, bizOp, memo} = history;
        let {item} = this.controller.periodSum.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = dateFromMinuteId(minuteId);
        let left = <div className="text-muted small w-8c"><EasyTime date={d} timeZone={-5} /></div>;
        let right = <div>{(value??0).toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}>
            {bizOp}{memo? ': ' + memo : ''}
        </LMR>;
    }

    private onClickItem = (item: ReturnUserItemHistoryRet) => {
        this.controller.showBizOpDetail(item);
    }
}