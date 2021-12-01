import { Tonva } from 'tonwa-core';
import { AppConfig, CAppBase } from './CAppBase';

export async function start(CApp: new (tonva: Tonva, config: AppConfig) => CAppBase<any>, tonva: Tonva, appConfig: AppConfig, isUserLogin?: boolean) {
	if (appConfig) {
		let { htmlTitle } = appConfig;
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

	let cApp = new CApp(tonva, appConfig);
	await cApp.start(isUserLogin);
}
