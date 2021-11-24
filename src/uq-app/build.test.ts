import { build, UQsBuildingLoader } from 'tonva-core';
import { TonvaReact, UqBuildContextUI } from "tonva-view";
import { appConfig } from './appConfig';

test('build UqApp', async () => {
	let tonva = new TonvaReact();
	//initNav(tonva);
	let uqsLoader: UQsBuildingLoader = new UQsBuildingLoader(tonva, appConfig);
	await build(new UqBuildContextUI(uqsLoader, 'src/uq-app'));
	let a = 1;
	console.log(a);
}, 600*1000);
