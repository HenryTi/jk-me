import { CSupervise } from "supervise";
import { List, LMR, VPage } from "tonva-react";
import { ReturnGetItemSumMonthsRet } from "uq-app/uqs/JkMe";

export class VItemMonthHistory extends VPage<CSupervise> {
    header() {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
		let {title, vice} = itemTitles[item];
        return title;
    }

    right() {
        return <button className="btn btn-sm btn-primary me-1"
            onClick={this.showDay}
        >日</button>
    }

    private showDay = async () => {
        this.ceasePage();
        await this.controller.showItemDayHistory(undefined);
    }

    content() {
        return <div className="">
            <List items={this.controller.itemSumMonths} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>
    }

    private renderItem = (row: ReturnGetItemSumMonthsRet, index: number) => {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
        let {unit, fixed} = itemTitles[item];
        let {date, value} = row;
        let d = new Date(date);
        return <LMR  className="px-3 py-2" 
            left={<div>{d.getFullYear()}年{(d.getMonth()+1)}月</div>} 
            right={<div>{value.toFixed(fixed??2)} {unit}</div>} />
    }

    private onClickItem = (row: ReturnGetItemSumMonthsRet) => {
        alert(JSON.stringify(row));
    }
}
