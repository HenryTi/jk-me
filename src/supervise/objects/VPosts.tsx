import { LMR } from "tonva-react";
import { Item, Post } from "uq-app/uqs/JkMe";
import { CPosts } from "./CPosts";
import { VObjects } from "./VObjects";

export class VPosts extends VObjects<CPosts> {
    protected renderItem(v:any, index:number): JSX.Element {
		let {postTitles, itemTitles} = this.controller.cApp;
        let {id, post, item, amountThisMonth, amountLastMonth} = v;
		let {title:postTitle} = postTitles[post as Post];
		let {fixed, unit, title:itemTitle} = itemTitles[item as Item];
        let right = <div className="d-flex align-items-center">
            <div className="w-10c text-end">{((amountThisMonth??0) as number).toFixed(fixed)} {unit}</div>
            <div className="w-10c text-end">{((amountLastMonth??0) as number).toFixed(fixed)} {unit}</div>
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            {postTitle} {itemTitle}
        </LMR>;
    }

    protected renderListHeader(): JSX.Element {
        return <div>
            <div className="d-flex px-3 py-3 border-bottom border-primary">
                <div className="flex-fill"></div>
                <div className="w-10c text-end">本月</div>
                <div className="w-10c text-end">上月</div>
            </div>
        </div>;
    }

    /*
    protected onClickItem(v:any) {
        this.controller.showPostItemHistory(v);
    }
    */
}
