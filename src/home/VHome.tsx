import { VPage } from "tonva-react";
import { CHome } from "./CHome";
import '../App.css';

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		return this.controller.cApp.renderVPortal();
	}
}
