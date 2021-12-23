import { List, LMR, VPage } from "tonwa";
import { renderNum } from "tools";
import { ReturnGetObjectItemPeriodHistoryRet } from "uq-app/uqs/JkMe";
import { CUnitPortal } from "./CUnitPortal";

abstract class VItemHistory extends VPage<CUnitPortal> {
    header() {
        let { itemTitles } = this.controller.cApp;
        let { item } = this.controller;
        return `${itemTitles[item].title}`;
    }
    content() {
        let { periodHistory } = this.controller;
        return <div className="">
            <List items={periodHistory}
                item={{ render: this.renderItem, onClick: this.onClickItem }} />
        </div>;
    }

    private renderItem = (history: ReturnGetObjectItemPeriodHistoryRet, index: number) => {
        let { itemTitles } = this.controller.cApp;
        let { date, value } = history;
        let { item } = this.controller;
        let { unit, fixed } = itemTitles[item];
        let d = new Date(date);
        let left = <div className="text-muted small">{this.renderDate(d)}</div>;
        let right = <div>{renderNum(value, unit, fixed)}</div>;
        return <LMR className="px-3 py-2" left={left} right={right}></LMR>;
    }

    private onClickItem = async (item: ReturnGetObjectItemPeriodHistoryRet) => {
        await this.clickItem(item);
    }

    protected abstract renderDate(date: Date): JSX.Element;
    protected abstract clickItem(item: ReturnGetObjectItemPeriodHistoryRet): Promise<void>;
}

export class VEachItemHistory extends VItemHistory {
    protected renderDate(date: Date): JSX.Element {
        return <>{date}</>;
    }
    protected async clickItem(item: ReturnGetObjectItemPeriodHistoryRet): Promise<void> {
        alert(JSON.stringify(item));
    }
}
