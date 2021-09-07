import { CHome } from "../home";
import { CMe } from "../me";
import { CBug } from "./bug";
import { CUqApp } from "./CBase";
import { res } from "./res";
import { VMain } from "./VMain";
import { CTester } from "./test-uqui";
import { setUI } from "./uqs";
import { Item, Post, ReturnGetUserSuperviseItemRet, ReturnGetUserSuperviseObjectRet } from "./uqs/JkMe";
import { CSupervise } from "supervise";

//const gaps = [10, 3,3,3,3,3,5,5,5,5,5,5,5,5,10,10,10,10,15,15,15,30,30,60];

export interface Title {
    title: string;
    vice?: string;
    unit?: string;
    fixed?: number;
}


export class CApp extends CUqApp {
	cHome: CHome;
	cSupervise: CSupervise;
	cBug: CBug;
	cMe: CMe;
	cUI: CTester;
	readonly itemTitles:{[item in Item]: Title} = {} as any;
	readonly postTitles:{[post in Post]: Title} = {} as any;
	superviseObjects: ReturnGetUserSuperviseObjectRet[];
	superviseItems: ReturnGetUserSuperviseItemRet[];
	
	protected async internalStart(isUserLogin: boolean) {
		this.setRes(res);
		setUI(this.uqs);

		await this.loadBaseData();

		this.cHome = this.newC(CHome);
		this.cSupervise = this.newC(CSupervise);
		this.cBug = this.newC(CBug);
		this.cMe = this.newC(CMe);
		this.cUI = this.newC(CTester) as CTester;
		this.cHome.load();
		this.openVPage(VMain, undefined, this.dispose);
		// 加上下面一句，可以实现主动页面刷新
		// this.timer = setInterval(this.callTick, 1000);
		// uq 里面加入这一句，会让相应的$Poked查询返回poke=1：
		// TUID [$User] ID (member) SET poke=1;
	}

	private timer:any;
	protected onDispose() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	private async loadBaseData() {
		let {JkMe} = this.uqs;
		let [retItemTitles, retPostTitles, superviseObjects, superviseItems] = await Promise.all([
			JkMe.GetItemTitles.query({}),
			JkMe.GetPostTitles.query({}),
			JkMe.GetUserSuperviseObject.query({}),
			JkMe.GetUserSuperviseItem.query({}),
		]);
		for (let it of retItemTitles.ret) this.itemTitles[it.id as Item] = it;
		for (let pt of retPostTitles.ret) this.postTitles[pt.id as Post] = pt;
		this.superviseObjects = superviseObjects.ret;
		this.superviseItems = superviseItems.ret;
	}

	/*
	private tick = 0;
	private gapIndex = 0;
	private callTick = async () => {
		try {
			if (!this.user) return;
			++this.tick;
			if (this.tick<gaps[this.gapIndex]) return;
			//console.error('tick ', new Date());
			this.tick = 0;
			if (this.gapIndex < gaps.length - 1) ++this.gapIndex;
			let ret = await this.uqs.BzHelloTonva.$poked.query(undefined, false);
			let v = ret.ret[0];
			if (v === undefined) return;
			if (!v.poke) return;
			this.gapIndex = 1;

			// 数据服务器提醒客户端刷新，下面代码重新调入的数据
			//this.cHome.refresh();
		}
		catch {
		}
	}
	*/
}
