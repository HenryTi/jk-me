import { VElement, View, EasyTime, FA, List, LMR } from "tonwa";
import { CPortal } from "./CPortal";
import { EnumPeriod, PostPeriodSum, ItemPeriodSum } from "./period";
import { renderNum } from "tools";

const cnColPeriod = "col text-center";
const cnPeriod = " py-2 px-3 ";
const cnTabCur = ' border-2 border-bottom border-primary fw-bold bg-light ';
const cnTab = ' border-bottom border-muted cursor-pointer text-muted ';

export class VPeriodSum<T extends CPortal = CPortal> extends View<T> {
    protected onClickItem: (item: any) => void = undefined;

    render(): VElement {
        return this.react(() => {
            let periodList: [EnumPeriod, string, string][] = [
                [EnumPeriod.day, '日', undefined],
                [EnumPeriod.week, '周', undefined],
                [EnumPeriod.month, '月', undefined],
                [EnumPeriod.year, '年', undefined],
            ];
            let { period, list } = this.controller;
            let { type } = period;
            for (let p of periodList) {
                let [ep] = p;
                p[2] = cnPeriod + (ep === type ? cnTabCur : cnTab);
            }
            return <div className="">
                <div className="row g-0">
                    {
                        periodList.map(v => {
                            let [ep, title, cn] = v;
                            return <div key={title} className={cnColPeriod}
                                onClick={() => this.controller.setPeriod(ep)}>
                                <div className={cn}>{title}</div>
                            </div>;
                        })
                    }
                </div>
                {this.renderDate()}
                <div className="">
                    <List items={list}
                        item={{ render: this.renderItem, onClick: this.onClickItem }} />
                </div>
                <div className="d-flex py-2 px-3">
                    <div className="flex-fill"></div>
                    <div className="small text-muted cursor-pointer"
                        onClick={this.controller.cApp.refresh}>
                        <FA name="refresh" />
                        {this.react(() => <EasyTime date={this.controller.cApp.refreshTime} />)}
                    </div>
                </div>
            </div>;
        });
    }

    private renderDate() {
        let { period, prev, next } = this.controller;
        let { hasNext } = period;
        let left = <div className="cursor-pointer p-3" onClick={prev}><FA name="angle-left" /></div>;
        let right = <div className={' p-3 ' + (hasNext ? ' cursor-pointer ' : ' text-light ')} onClick={next}><FA name="angle-right" /></div>
        return <div className="d-flex justify-content-center">
            {left}
            <div className="text-center px-1 py-3 w-min-10c">{period.render()}</div>
            {right}
        </div>;
    }

    protected renderItem = (postPeriodSum: PostPeriodSum, index: number) => {
        let { cApp, showOpiHistory } = this.controller;
        let { postTitles } = cApp;
        let { post, itemList } = postPeriodSum;
        let { title, vice } = postTitles[post];
        return <div className="d-block mx-2 my-3 border border-success rounded-3">
            <div className="px-3 py-2">
                <b className="text-primary">{title}</b>
                <small className="text-muted ms-3">{vice}</small>
            </div>
            <div>
                <List items={itemList}
                    item={{ render: this.renderItemPeriodSum, onClick: showOpiHistory }} />
            </div>
        </div>;
    }

    private renderItemPeriodSum = (ips: ItemPeriodSum, index: number) => {
        let { cApp } = this.controller;
        let { itemTitles } = cApp;
        let { item, value } = ips;
        let titles = itemTitles[item];
        if (titles) {
            let { title, vice, fixed, unit } = titles;
            return <div className="d-block pb-2">
                <LMR className="px-3 py-2 w-100" right={<div>{renderNum(value, unit, fixed)}</div>}>
                    <small><FA className="me-2 text-danger small" name="bookmark-o" /></small> {title}
                </LMR>
                <div className="px-3 small ms-3 me-4"><small className="text-muted">{vice}</small></div>
            </div>;
        }
        let { post } = ips;
        let { postTitles } = cApp;
        let posts = postTitles[post];
        if (posts) {
            let { title, vice, fixed } = posts;
            return <LMR className="px-3 py-2 w-100" right={<div>{renderNum(value, undefined, fixed)}</div>}>
                {title} <small className="text-muted ms-3">{vice}</small>
            </LMR>;
        }
        return <div>unknown item {item} and post {post}</div>;
    }
}
