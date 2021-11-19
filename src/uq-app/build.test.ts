import { build, UQsBuildingLoader } from 'tonva-core';
import { WebUI, UqBuildContextUI } from 'tonva-react';
import { appConfig } from './appConfig';

test('build UqApp', async () => {
	let web = new WebUI();
	let uqsLoader: UQsBuildingLoader = new UQsBuildingLoader(web, appConfig);
	await build(new UqBuildContextUI(uqsLoader, 'src/uq-app'));
	let a = 1;
	console.log(a);
}, 600*1000);
