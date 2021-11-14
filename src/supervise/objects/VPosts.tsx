import { LMR } from "tonva-react";
import { cnAmount } from "tools";
import { Item, Post } from "uq-app/uqs/JkMe";
import { CPosts } from "./CPosts";
import { VObjects } from "./VObjects";

export class VPosts extends VObjects<CPosts> {
    protected renderItem(v:any, index:number): JSX.Element {
		let {postTitles, itemTitles} = this.controller.cApp;
        let {post, item, amountThisMonth, amountLastMonth} = v;
		let {title:postTitle} = postTitles[post as Post];
		let {title:itemTitle} = itemTitles[item as Item];
        let right = <div className="d-flex align-items-center">
            {this.vAmount(amountThisMonth, item)}
            {this.vAmount(amountLastMonth, item)}
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            {postTitle} {itemTitle}
        </LMR>;
    }

    protected renderListHeader(): JSX.Element {
        return <div>
            <div className="d-flex px-3 py-3 border-bottom border-primary">
                <div className="flex-fill"></div>
                <div className={cnAmount}>本月</div>
                <div className={cnAmount}>上月</div>
            </div>
        </div>;
    }

    private vAmount(amount:number, item:Item):JSX.Element {
		let {itemTitles} = this.controller.cApp;
		let {fixed, unit} = itemTitles[item];
        return <div className={cnAmount}>
            {((amount??0) as number).toFixed(fixed)} 
            <small className="text-muted">{unit}</small>
        </div>;
    }

    /*
    protected onClickItem(v:any) {
        this.controller.showPostItemHistory(v);
    }
    */
}
