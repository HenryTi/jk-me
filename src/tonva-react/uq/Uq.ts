import { observer } from "mobx-react";
import React from "react";
import { /*ParamActDetail, ParamActDetail2, ParamActDetail3, ParamActIX
    , ParamActIXSort, ParamID, ParamIDDetailGet, ParamIDinIX, ParamIDLog
    , ParamIDNO, ParamIDSum, ParamIDTree, ParamIDxID, ParamIX, ParamKeyID
    , ParamKeyIX, ParamQueryID, RetActDetail, RetActDetail2, RetActDetail3
    , Uq, */UqMan } from "tonva-core";

export class Uq {
    private $_uqMan: UqMan;
    constructor(uqMan: UqMan) {
        this.$_uqMan = uqMan;
    }

    $_createProxy() {
		let ret = new Proxy(this.$_uqMan.entities, {
			get: (target, key, receiver) => {
				let lk = (key as string).toLowerCase();
				if (lk === '$') {
					return this;
				}
				let ret = target[lk];
				if (ret !== undefined) return ret;
				let func = (this.$_uqMan as any)[key];
				if (func !== undefined) return func;
				let err = `entity ${this.$_uqMan.name}.${String(key)} not defined`;
				console.error('UQ错误：' + err);
				this.showReload('服务器正在更新');
				return undefined;
			}
		});
		//this.proxy = ret;
		//this.idCache = new IDCache(this.proxy);
		return ret;
    }

    private showReload(msg: string) {
        console.error('uq proxy error name', msg);
        /*
		let cache = this.localMap.child('$reload-tick');
		let reloadTick = cache.get();
		if (!reloadTick) reloadTick = 0;
		console.error(msg);
		this.localMap.removeAll();
		let tick = Date.now();
		cache.set(tick);
		if (tick - reloadTick  < 10*1000)  {
			this.web.showReloadPage(msg);
		}
		else {
			this.web.reload();
		}
        */
    }

	/*
    IDTv(ids: number[]): Promise<any[]> {
        return this.$_uqMan.IDTv(ids);
    }
	*/
	
	protected IDRender = (id: number, render?:(value:any) => JSX.Element): JSX.Element => {
		return React.createElement(observer(() => {
			let ret = this.$_uqMan.idCache.getValue(id);
			if (ret === undefined) {
				return React.createElement('span', {props:{className: 'text-muted'},  children: ['id='+id]});
			}
			let {$type} = ret as any;
			if (!$type) return this.renderIDUnknownType(id);
			let IDType = this.$_uqMan.ids[$type];
			if (!IDType) return this.renderIDUnknownType(id);
			return (render ?? (IDType as any).render)(ret);
		}));
	}

	protected IDV = <T extends object>(id: number): T => {
		let ret = this.$_uqMan.idCache.getValue(id);
		return ret as T;
	}

	private renderIDUnknownType(id: number) {
		return React.createElement('span', {props:{className: 'text-muted'},  children: [`id=${id} type undefined`]});
	}
	/*
	IDLocalTv(ids: number[]): Promise<any[]> {
		return this.IDTv(ids.map(v => -v));
	}
	*/
	protected IDLocalV = <T extends object>(id: number): T => {
		return this.IDV(-id);
	}

	protected IDLocalRender = (id: number, render?:(value:any) => JSX.Element): JSX.Element => {
		return this.IDRender(-id, render);
	}
}