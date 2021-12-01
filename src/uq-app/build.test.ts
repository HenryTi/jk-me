import { build, UQsBuildingLoader } from 'tonwa-core';
import { TonvaReact, UqBuildContextUI } from "tonwa";
import { appConfig } from './appConfig';

test('build UqApp', async () => {
	let tonwa = new TonvaReact();
	//initNav(tonwa);
	let uqsLoader: UQsBuildingLoader = new UQsBuildingLoader(tonwa, appConfig);
	await build(new UqBuildContextUI(uqsLoader, 'src/uq-app'));
	let a = 1;
	console.log(a);
}, 600 * 1000);
