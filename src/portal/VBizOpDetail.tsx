import { dateFromMinuteId } from 'tonwa-core';
import { EasyTime, FA, VPage } from "tonwa";
import { CPortal } from "./CPortal";
import { renderNum } from 'tools';

export class VBizOpDetail extends VPage<CPortal> {
    header() { return '业务详情' }
    content() {
        let { bizOpDetail } = this.controller;
        let { id, bizOp, memo, value } = bizOpDetail.item;
        let { itemTitles, timezone } = this.controller.cApp;
        let { item } = this.controller.itemPeriodSum;
        let { unit, fixed } = itemTitles[item];
        let d = dateFromMinuteId(id, timezone);
        return <div className="p-3">
            <div>业务编号：{bizOp}</div>
            <div>发生时间：<EasyTime date={d} timeZone={-5} /></div>
            <div>{memo} {renderNum(value, unit, fixed)}</div>
            <div className="my-3">
                <FA className="text-danger me-3" name="smile-o" size="lg" />
                <span className="text-muted">业务详情显示正在开发中</span>
            </div>
        </div>
    }
}
