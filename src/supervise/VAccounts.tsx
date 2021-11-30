import { List, LMR, VPage } from "tonwa";
import { EnumAccount, EnumObjectType, Post, ReturnGetAccountsRet } from "uq-app/uqs/JkMe";
import { CSupervise } from "./CSupervise";

export class VAccounts extends VPage<CSupervise> {
    header() { return '账户余额列表' }
    content() {
        return <List items={this.controller.accounts}
            item={{ render: this.renderAccount, onClick: this.controller.showAccountHistory }} />
    }

    private renderAccount = (row: ReturnGetAccountsRet, index: number) => {
        let { cApp, uqs } = this.controller;
        let { accountTitles } = cApp;
        let { account, balance, objectType, objectTo } = row;
        let { title: accountTitle, unit, fixed } = accountTitles[account as EnumAccount];
        let right = <div>
            <span>{balance.toFixed(fixed ?? 2)}</span>
            <small className="ms-1 text-muted">{unit}</small>
        </div>;
        let { Employee } = uqs.JkHr;
        const renderObject = () => {
            switch (Number(objectType) as EnumObjectType) {
                default: return <>{objectType} {objectTo}</>;
                case EnumObjectType.post:
                    let { postTitles } = cApp;
                    return <>{postTitles[objectTo as Post]?.title}</>;
                case EnumObjectType.staff:
                    return Employee.tv(objectTo, renderEmployee);
            }
        }
        return <LMR className="px-3 py-2" right={right}>
            {renderObject()} {accountTitle}
        </LMR>
    }
}

function renderEmployee(employee: any): JSX.Element {
    let { name } = employee;
    return <>{name}</>;
}
