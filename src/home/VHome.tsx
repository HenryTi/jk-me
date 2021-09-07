import React from "react";
import { observer } from "mobx-react";
import { FA, List, LMR, VPage } from "tonva-react";
import { CHome } from "./CHome";
import '../App.css';
import { ReturnUserItemPeriodSumRet } from "uq-app/uqs/JkMe";
import { EnumPeriod, ItemPeriodSum, PostPeriodSum } from "./periodSum";

const cnColPeriod = "col text-center";
const cnPeriod = " py-2 px-3 ";
const cnTabCur = ' border-2 border-bottom border-primary fw-bold bg-light ';
const cnTab = ' border-bottom border-muted cursor-pointer text-muted ';

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {		
		return React.createElement(observer(() => {
			let periodList:[EnumPeriod, string, string][] = [
				[EnumPeriod.day, '日', undefined],
				[EnumPeriod.week, '周', undefined],
				[EnumPeriod.month, '月', undefined],
				[EnumPeriod.year, '年', undefined],
			];
			let {period} = this.controller.periodSum;
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
								onClick={() => this.controller.periodSum.setPeriod(ep)}>
								<div className={cn}>{title}</div>
							</div>;
						})
					}
				</div>
				{this.renderDate()}
				<div className="">
					<List items={this.controller.periodSum.postPeriodSumList} 
						item={{render: this.renderItem, onClick: this.onClickItem}} />
				</div>
			</div>;
		}));
	}

	private renderDate() {
		let {periodSum} = this.controller;
		let {period, prev, next} = periodSum;
		let {hasNext} = period;
		let left = <div className="cursor-pointer p-3" onClick={prev}><FA name="angle-left" /></div>;
		let right = <div className={' p-3 ' + (hasNext? ' cursor-pointer ':' text-light ')} onClick={next}><FA name="angle-right" /></div>
		/*
		let content:any;
		switch(type) {
			case EnumPeriod.day:
				content = <>{from.toLocaleDateString()}</>;
				break;
			case EnumPeriod.week:
				content = <>{from.toLocaleDateString()} - {to.toLocaleDateString()}</>;
				break;
			case EnumPeriod.month:
				content = <>{from.getFullYear()}年{from.getMonth()+1}月</>;
				break;
			case EnumPeriod.year:
				content = <>{from.getFullYear()}年</>;
				break;
		}
		*/
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
		let {item, sumValue} = ips;
		let {title, vice} = itemTitles[item];
		return <LMR className="px-3 py-2 w-100" right={<div>{sumValue}</div>}>
			{title} <small className="text-muted ms-3">{vice}</small>
		</LMR>;
	}
	
	private onClickItemPeriodSum = (ips: ItemPeriodSum) => {
		this.controller.showItemHistory(ips, EnumPeriod.day);
	}
}