import { VPage } from "tonva-react";
import { CHome } from "./CHome";
import '../App.css';

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		let {cApp, cAccount} = this.controller;
		return <div>
			<div className="d-flex flex-wrap p-2">
				{cAccount?.renderAccounts()}
			</div>
			{cApp.renderVPortal()}
		</div>
	}
}
