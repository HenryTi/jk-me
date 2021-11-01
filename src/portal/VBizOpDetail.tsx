import { dateFromMinuteId, EasyTime, FA, VPage } from "tonva-react";
import { CPortal } from "./CPortal";

export class VBizOpDetail extends VPage<CPortal> {
    header() {return '业务详情'}
    content() {
        let {bizOpDetail} = this.controller;
        let {minuteId, bizOp, memo, value} = bizOpDetail.item;
        let {itemTitles, timezone} = this.controller.cApp;
        let {item} = this.controller.itemPeriodSum;
        let {unit, fixed} = itemTitles[item];
        let d = dateFromMinuteId(minuteId, timezone);
        return <div className="p-3">
            <div>业务编号：{bizOp}</div>
            <div>发生时间：<EasyTime date={d} timeZone={-5} /></div>
            <div>{memo} {(value??0).toFixed(fixed??2)} {unit}</div>
            <div className="my-3">
                <FA className="text-danger me-3" name="smile-o" size="lg" />
                <span className="text-muted">业务详情显示正在开发中</span>
            </div>
        </div>
    }
}
