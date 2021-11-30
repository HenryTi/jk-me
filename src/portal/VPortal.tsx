import { VElement, View, EasyTime, FA, List, LMR } from "tonwa";
import { CPortal } from "./CPortal";
import { EnumPeriod, PostPeriodSum, ItemPeriodSum } from "./period";
import { ReturnGetObjectItemPeriodSumRet } from "uq-app/uqs/JkMe";

const cnColPeriod = "col text-center";
const cnPeriod = " py-2 px-3 ";
const cnTabCur = ' border-2 border-bottom border-primary fw-bold bg-light ';
const cnTab = ' border-bottom border-muted cursor-pointer text-muted ';

export class VPeriodSum<T extends CPortal = CPortal> extends View<T> {
	render(): VElement {
		return this.react(() => {
			let periodList: [EnumPeriod, string, string][] = [
				[EnumPeriod.day, '日', undefined],
				[EnumPeriod.week, '周', undefined],
				[EnumPeriod.month, '月', undefined],
				[EnumPeriod.year, '年', undefined],
			];
			let { period } = this.controller;
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
					<List items={this.controller.list}
						item={{ render: this.renderItem, onClick: undefined/*this.onClickItem*/ }} />
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

	private onClickItem = (item: ReturnGetObjectItemPeriodSumRet) => {
		//this.controller.showItemHistory(item.id, EnumSumPeriod.day);
	}

	protected renderItem = (postPeriodSum: PostPeriodSum, index: number) => {
		let { postTitles } = this.controller.cApp;
		let { post, itemList } = postPeriodSum;
		let { title, vice } = postTitles[post];
		return <div className="d-block mx-3 my-3 border border-success">
			<div className="px-3 py-2">
				<b className="text-primary">{title}</b>
				<small className="text-muted ms-3">{vice}</small>
			</div>
			<div>
				<List items={itemList}
					item={{ render: this.renderItemPeriodSum, onClick: this.onClickItemPeriodSum }} />
			</div>
		</div>;
	}

	private renderItemPeriodSum = (ips: ItemPeriodSum, index: number) => {
		let { itemTitles } = this.controller.cApp;
		let { item, value } = ips;
		let { title, vice, fixed } = itemTitles[item];
		return <LMR className="px-3 py-2 w-100" right={<div>{(value ?? 0).toFixed(fixed)}</div>}>
			{title} <small className="text-muted ms-3">{vice}</small>
		</LMR>;
	}

	private onClickItemPeriodSum = (ips: ItemPeriodSum) => {
		switch (this.controller.period.type) {
			case EnumPeriod.day:
				this.controller.showPostItemHistory(ips, undefined, undefined);
				break;
			case EnumPeriod.month:
			case EnumPeriod.week:
				this.controller.showDayPostItemHistory(ips, undefined, undefined);
				break;
			case EnumPeriod.year:
				this.controller.showMonthPostItemHistory(ips, undefined, undefined);
				break;
		}
	}
}
