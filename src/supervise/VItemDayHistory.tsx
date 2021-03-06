import { CSupervise } from "supervise";
import { List, LMR, View, VPage } from "tonwa";
import { renderNum } from "tools";
import { ReturnGetItemSumDaysRet } from "uq-app/uqs/JkMe";

export class ViewItemDayHistory extends View<CSupervise> {
    render() {
        return <List items={this.controller.itemSumDays}
            item={{ render: this.renderDayItem, onClick: this.onClickDayItem }} />
    }

    private renderDayItem = (row: ReturnGetItemSumDaysRet, index: number) => {
        let { cApp, item } = this.controller;
        let { itemTitles } = cApp;
        let { unit, fixed } = itemTitles[item];
        let { date, value } = row;
        return <LMR className="px-3 py-2"
            left={<div>{new Date(date).toLocaleDateString()}</div>}
            right={<div>{renderNum(value, unit, fixed)}</div>} />
    }

    private onClickDayItem = async (row: ReturnGetItemSumDaysRet) => {
        let { date } = row;
        let from = new Date(date);
        let to = new Date(from);
        to.setDate(to.getDate() + 1);
        await this.controller.showItemHistory(from, to);
    }
}

export class VItemDayHistory extends VPage<CSupervise> {
    header() {
        let { cApp, item } = this.controller;
        let { itemTitles } = cApp;
        let { title } = itemTitles[item];
        return title;
    }

    content() {
        let v = new ViewItemDayHistory(this.controller);
        return <div className="">
            {v.render()}
        </div>
    }
}
