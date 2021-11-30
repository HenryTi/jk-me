import { CSupervise } from "supervise";
import { List, LMR, VPage } from "tonwa";
import { ReturnGetItemSumMonthsRet } from "uq-app/uqs/JkMe";
import { ViewItemDayHistory } from "./VItemDayHistory";

export class VItemSumHistory extends VPage<CSupervise> {
    header() {
        let { cApp, item } = this.controller;
        let { itemTitles } = cApp;
        let { title } = itemTitles[item];
        return title;
    }

    content() {
        let v = new ViewItemDayHistory(this.controller);
        return <div className="">
            <div className="px-3 pt-4 pb-2 text-center">按日汇总 <small className="text-muted">(近30日)</small></div>
            {v.render()}
            <div className="px-3 pt-4 pb-2 text-center">按月汇总 <small className="text-muted">(近12月))</small></div>
            <List items={this.controller.itemSumMonths}
                item={{ render: this.renderMonthItem, onClick: this.onClickMonthItem }} />
        </div>
    }

    private renderMonthItem = (row: ReturnGetItemSumMonthsRet, index: number) => {
        let { cApp, item } = this.controller;
        let { itemTitles } = cApp;
        let { unit, fixed } = itemTitles[item];
        let { date, value } = row;
        let d = new Date(date);
        return <LMR className="px-3 py-2"
            left={<div>{d.getFullYear()}年{(d.getMonth() + 1)}月</div>}
            right={<div>{(value ?? 0).toFixed(fixed ?? 2)} {unit}</div>} />
    }

    private onClickMonthItem = async (row: ReturnGetItemSumMonthsRet) => {
        let { date } = row;
        let from = new Date(date.getFullYear(), date.getMonth(), 1);
        let to = new Date(from);
        to.setMonth(to.getMonth() + 1);
        await this.controller.showItemDayHistory(undefined, from, to);
    }
}
