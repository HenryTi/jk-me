import { CAccount } from "./CAccount";
import { View } from 'tonwa';
import { EnumAccount, Post } from "uq-app/uqs/JkMe";

export class VAccount extends View<CAccount> {
    render() {
        return this.react(() => {
            let { data, cApp, onAccountClick } = this.controller;
            let { accounts } = data;
            if (!accounts) return null;
            let { accountTitles, postTitles } = cApp;
            return <>{accounts.map((v, index) => {
                let { post, account, balance } = v;
                let { title, unit, fixed } = accountTitles[account as EnumAccount];
                let postTitle = postTitles[post as Post];
                return <div key={index}
                    className="m-2 p-3 border border-info rounded rounded-3 bg-white text-center cursor-pointer"
                    onClick={() => onAccountClick(v)}>
                    <div className="mb-1 small">
                        <span className="text-secondary small">{postTitle?.title}</span>
                        <span className="text-primary">{title}</span>
                    </div>
                    <div>
                        <span className="fs-5 me-1">{balance.toFixed(fixed)}</span>
                        <small className="text-muted">{unit}</small></div>
                </div>
            })}</>;
        });
    }
}
