import React from "react";
import { observer } from "mobx-react";
import { FA, List, LMR, VPage } from "tonva-react";
import { CPeriodSum } from "./CPortal";
import { View } from "tonva-react";
import { EnumPeriod, PostPeriodSum, ItemPeriodSum } from "./period";
import { ReturnUserItemPeriodSumRet } from "uq-app/uqs/JkMe";

const cnColPeriod = "col text-center";
const cnPeriod = " py-2 px-3 ";
const cnTabCur = ' border-2 border-bottom border-primary fw-bold bg-light ';
const cnTab = ' border-bottom border-muted cursor-pointer text-muted ';

export class VPeriodSum extends View<CPeriodSum> {
    render(): JSX.Element {
		return React.createElement(observer(() => {
			let periodList:[EnumPeriod, string, string][] = [
				[EnumPeriod.day, '日', undefined],
				[EnumPeriod.week, '周', undefined],
				[EnumPeriod.month, '月', undefined],
				[EnumPeriod.year, '年', undefined],
			];
			let {period} = this.controller;
			let {type} = period;
			for (let p of periodList) {
				let [ep] = p;
				p[2] = cnPeriod + (ep === type? cnTabCur : cnTab);
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
					<List items={this.controller.postPeriodSumList} 
						item={{render: this.renderItem, onClick: undefined/*this.onClickItem*/}} />
				</div>
			</div>;
		}));
    }

	private renderDate() {
		let {period, prev, next} = this.controller;
		let {hasNext} = period;
		let left = <div className="cursor-pointer p-3" onClick={prev}><FA name="angle-left" /></div>;
		let right = <div className={' p-3 ' + (hasNext? ' cursor-pointer ':' text-light ')} onClick={next}><FA name="angle-right" /></div>
		return <div className="d-flex">
			{left}
			<div className="text-center flex-fill py-3">{period.render()}</div>
			{right}
		</div>;
	}

	private onClickItem = (item: ReturnUserItemPeriodSumRet) => {
		//this.controller.showItemHistory(item.id, EnumSumPeriod.day);
	}

	private renderItem = (postPeriodSum: PostPeriodSum, index: number) => {
		let {postTitles} = this.controller.cApp;
		let {post, itemList} = postPeriodSum;
		let {title, vice} = postTitles[post];
		return <div className="d-block mx-3 my-3 border border-success">
			<div className="px-3 py-2">
				<b className="text-primary">{title}</b>
				<small className="text-muted ms-3">{vice}</small>
			</div>
			<div>
				<List items={itemList} 
					item={{render: this.renderItemPeriodSum, onClick: this.onClickItemPeriodSum}} />
			</div>
		</div>;
	}

	private renderItemPeriodSum = (ips: ItemPeriodSum, index: number) => {
		let {itemTitles} = this.controller.cApp;
		let {item, value} = ips;
		let {title, vice, fixed} = itemTitles[item];
		return <LMR className="px-3 py-2 w-100" right={<div>{(value??0).toFixed(fixed)}</div>}>
			{title} <small className="text-muted ms-3">{vice}</small>
		</LMR>;
	}
	
	private onClickItemPeriodSum = (ips: ItemPeriodSum) => {
		switch (this.controller.period.type) {
			case EnumPeriod.day:
				this.controller.showItemHistory(ips, undefined, undefined);
				break;
			case EnumPeriod.month:
			case EnumPeriod.week:
				this.controller.showItemDayHistory(ips, undefined, undefined);
				break;
			case EnumPeriod.year:
				this.controller.showItemMonthHistory(ips, undefined, undefined);
				break;
		}
	}
}
