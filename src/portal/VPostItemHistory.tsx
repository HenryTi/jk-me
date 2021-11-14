import { dateFromMinuteId } from 'tonva-core';
import { List, LMR, VDate, VPage } from "tonva-react";
import { ReturnGetObjectItemHistoryRet } from "uq-app/uqs/JkMe";
import { CPortal } from "./CPortal";

export class VPostItemHistory extends VPage<CPortal> {
	header() {
        let {itemTitles, postTitles} = this.controller.cApp;
        let {itemPeriodSum} = this.controller;
        let {post, item} = itemPeriodSum;
        return `${postTitles[post].title} - ${itemTitles[item].title}`;
    }
	content() {
        let {history} = this.controller;
		return <div className="">
            <List items={history} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>;
    }

    private renderItem = (history: ReturnGetObjectItemHistoryRet, index: number) => {
        let {itemTitles, timezone} = this.controller.cApp;
        let {minuteId, value, bizOp, memo} = history;
        let {item} = this.controller.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = dateFromMinuteId(minuteId, timezone);
        let left = <div className="text-muted small w-min-4c me-2">
            <VDate date={d} hideSameYear={true} />
        </div>;
        let right = <div className="ms-2">{(value??0).toFixed(fixed??2)} {unit}</div>;
        return <LMR className="px-3 py-2 align-items-center" left={left} right={right}>
            <small>{bizOp}{memo? ': ' + memo : ''}</small>
        </LMR>;
    }

    private onClickItem = (item: ReturnGetObjectItemHistoryRet) => {
        this.controller.showBizOpDetail(item);
    }
}