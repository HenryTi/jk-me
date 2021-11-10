//import { build } from 'tonva-react';
import { build, UQsBuildingLoader } from 'tonva-core';
import { WebReact } from 'tonva-react';
import { appConfig } from './appConfig';

test('build UqApp', async () => {
	let web = new WebReact();
	let uqsLoader: UQsBuildingLoader = new UQsBuildingLoader(web, appConfig);
	await build(uqsLoader, 'src/uq-app');
	let a = 1;
	console.log(a);
}, 600*1000);
