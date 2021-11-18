import { observer } from "mobx-react-lite";
import React from "react";
import { UqMan } from "tonva-core";

export class UqManExt extends UqMan {
	protected IDRender = (id: number, render?:(value:any) => JSX.Element): JSX.Element => {
		return React.createElement(observer(() => {
			let ret = this.idCache.getValue(id);
			if (ret === undefined) {
				return React.createElement('span', {props:{className: 'text-muted'},  children: ['id='+id]});
			}
			let {$type} = ret as any;
			if (!$type) return this.renderIDUnknownType(id);
			let IDType = this.ids[$type];
			if (!IDType) return this.renderIDUnknownType(id);
			return (render ?? (IDType as any).render)(ret);
		}));
	}

	protected IDV = <T extends object>(id: number): T => {
		let ret = this.idCache.getValue(id);
		return ret as T;
	}

	private renderIDUnknownType(id: number) {
		return React.createElement('span', {props:{className: 'text-muted'},  children: [`id=${id} type undefined`]});
	}

	IDLocalTv(ids: number[]): Promise<any[]> {
		return this.IDTv(ids.map(v => -v));
	}

	protected IDLocalV = <T extends object>(id: number): T => {
		return this.IDV(-id);
	}

	protected IDLocalRender = (id: number, render?:(value:any) => JSX.Element): JSX.Element => {
		return this.IDRender(-id, render);
	}
}
