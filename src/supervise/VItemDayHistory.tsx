import { CSupervise } from "supervise";
import { List, LMR, View, VPage } from "tonva-react";
import { ReturnGetItemSumDaysRet, ReturnGetItemSumMonthsRet } from "uq-app/uqs/JkMe";

export class ViewItemDayHistory extends View<CSupervise> {
    render() {
        return <List items={this.controller.itemSumDays} 
            item={{render: this.renderDayItem, onClick: this.onClickDayItem}} />
    }

    private renderDayItem = (row: ReturnGetItemSumDaysRet, index: number) => {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
        let {unit, fixed} = itemTitles[item];
        let {date, value} = row;
        return <LMR  className="px-3 py-2" 
            left={<div>{new Date(date).toLocaleDateString()}</div>} 
            right={<div>{(value??0).toFixed(fixed??2)} {unit}</div>} />
    }

    private onClickDayItem = async (row: ReturnGetItemSumDaysRet) => {
        let {date} = row;
        let from = new Date(date);
        let to = new Date(from);
        to.setDate(to.getDate() + 1);
        await this.controller.showItemHistory(from, to);
    }
}

export class VItemDayHistory extends VPage<CSupervise> {
    header() {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
		let {title, vice} = itemTitles[item];
        return title;
    }

    content() {
        let v = new ViewItemDayHistory(this.controller);
        return <div className="">
            {v.render()}
        </div>
    }
}
