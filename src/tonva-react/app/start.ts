import { Web } from 'tonva-core';
import { WebReact } from '../WebReact';
import { AppConfig, CAppBase } from './CAppBase';

export async function start(CApp: new (web:Web, config: AppConfig) => CAppBase<any>, appConfig: AppConfig, isUserLogin?:boolean) {
	if (appConfig) {
		let {htmlTitle} = appConfig;
		if (htmlTitle) {
			document.title = htmlTitle;
		}
		let html = document.getElementsByTagName('html');
		let html0 = html[0];
		if (html0) {
			let version = html0?.getAttribute('data-version');
			if (version) {
				//appConfig.version = version;
			}
		}
	}

	let web = new WebReact();
	let cApp = new CApp(web, appConfig);
    await cApp.start(isUserLogin);
}
