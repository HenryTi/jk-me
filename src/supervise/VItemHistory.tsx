import { dateFromMinuteId } from 'tonva-core';
import { List, LMR, VDate, VPage } from "tonva-react";
import { CSupervise } from "supervise";
import { ReturnGetItemHistory$page } from "uq-app/uqs/JkMe";

export class VItemHistory extends VPage<CSupervise> {
    header() {
        let {cApp, item} = this.controller;
        let {itemTitles} = cApp;
		let {title} = itemTitles[item];
        return title + '明细';
    }

    content() {
        return <div className="">
            <List items={this.controller.pageItemHistory} 
                item={{render: this.renderItem, onClick: this.onClickItem}} />
        </div>
    }

    private renderItem = (row: ReturnGetItemHistory$page, index: number) => {
        let {cApp, item} = this.controller;
        let {itemTitles, timezone} = cApp;
        let {unit, fixed} = itemTitles[item];
        let {id, bizOp, value, memo} = row;
        let date = dateFromMinuteId(id, timezone);
        let left = <div className="small text-muted w-min-6c">
            <VDate date={date} hideSameYear={true} />
        </div>; 
        return <LMR className="px-3 py-2 align-items-center" 
            left={left} 
            right={<div>{(value??0).toFixed(fixed??2)} <small className="text-muted">{unit}</small></div>}>
            <b>{bizOp}</b> {memo}
        </LMR>;
    }

    private onClickItem = (row: ReturnGetItemHistory$page) => {
        alert(JSON.stringify(row));
    }
}
