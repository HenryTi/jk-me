import { VPage } from "tonva-react";
import { CHome } from "./CHome";
import '../App.css';
import { observer } from "mobx-react";
import { EnumAccount } from "uq-app/uqs/JkMe";

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		let VAccounts = observer(() => {
			let {accounts, cApp, onAccountClick} = this.controller;
			if (!accounts) return null;
			let {accountTitles} = cApp;
			return <>{accounts.map(v => {
				let {objectAccount, account, balance} = v;
				let {title, vice, unit, fixed} = accountTitles[account as EnumAccount];
				return <div className="m-2 p-3 border border-info rounded rounded-3 bg-white text-center cursor-pointer"
					onClick={() => onAccountClick(v)}>
					<div className="mb-1 text-primary small">{title}</div>
					<div>
						<span className="fs-5 me-1">{balance.toFixed(fixed)}</span>
						<small className="text-muted">{unit}</small></div>
				</div>
			})}</>;
		});
		return <div>
			<div className="d-flex flex-wrap p-2">
				<VAccounts />
			</div>
			{this.controller.cApp.renderVPortal()}
		</div>
	}
}
