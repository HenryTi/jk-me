import { CSupervise } from "supervise";
import { List, LMR, VPage } from "tonva-react";
import { ReturnGetItemSumDaysRet } from "uq-app/uqs/JkMe";

export class VItemDayHistory extends VPage<CSupervise> {
    header() {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
		let {title, vice} = itemTitles[item];
        return title;
    }

    right() {
        return <button 
            className="btn btn-sm btn-primary me-1"
            onClick={this.showMonth}>
            月
        </button>;
    }

    private showMonth = async () => {
        this.ceasePage();
        await this.controller.showItemMonthHistory(undefined);
    }

    content() {
        return <div className="">
            <List items={this.controller.itemSumDays} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>
    }

    private renderItem = (row: ReturnGetItemSumDaysRet, index: number) => {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
        let {unit, fixed} = itemTitles[item];
        let {date, value} = row;
        return <LMR  className="px-3 py-2" 
            left={<div>{new Date(date).toLocaleDateString()}</div>} 
            right={<div>{value.toFixed(fixed??2)} {unit}</div>} />
    }

    private onClickItem = (row: ReturnGetItemSumDaysRet) => {
        alert(JSON.stringify(row));
    }
}
