import { CAccount } from 'account';
import { dateFromHourId } from 'tonva-core';
import { EasyDate, List, LMR, VPage } from "tonva-react";
import { Item, Post, ReturnGetObjectAccountHistoryRet } from "uq-app/uqs/JkMe";

export class VObjectAccountHistory extends VPage<CAccount> {
    header() {return '账户明细'}
    content() {
        let {accountHistory} = this.controller;
        return <div>
            <List items={accountHistory} item={{render: this.renderHistory}} />
        </div>
    }

    private renderHistory = (row:ReturnGetObjectAccountHistoryRet, index:number) => {
        let {accountTitle, cApp} = this.controller;
        let {fixed, unit} = accountTitle;
        let {postTitles, itemTitles} = cApp;
        let {date, value, item, post} = row;
        let right = <div>
            <span className="me-1">{value.toFixed(fixed)}</span>
            <small className="text-muted">{unit}</small>
        </div>;
        return <LMR className="px-3 py-2" right={right}>
            <span className="d-inline-block w-min-6c">{dateString(dateFromHourId(date))}</span>
            <small className="text-muted">
            {postTitles[post as Post].title} &nbsp;
            {itemTitles[item as Item].title}
            </small>
        </LMR>
    } 
}

function dateString(date: Date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    if (y === new Date().getFullYear()) {
        return `${m}月${d}日`;
    }
    else {
        return `${y}年${m}月${d}日`;
    }
}
