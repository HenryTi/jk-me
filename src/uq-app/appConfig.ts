//=== UqApp builder created on Tue Jan 12 2021 23:14:51 GMT-0500 (GMT-05:00) ===//
import { AppConfig } from "tonva-react";
import { DevConfig } from 'tonva-core';

/*
const bz: DevConfig = {
	name: 'bizdev',
	alias: 'bz',
}
*/
const jk: DevConfig = {
	name: '百灵威系统工程部',
	alias: 'jk',
}

export const appConfig: AppConfig = {
	version: '0.1.0',
	app: undefined,
	uqs: [
		{
			dev: jk,
			name: 'me',
			alias: 'Me',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'product',
			alias: 'Product',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: '积分商城',
			alias: 'PointShop',
			version: '0.1.0',
		},
		{
			dev: jk,
			name: 'hr',
			alias: 'Hr',
			version: '0.1.0',
		},
	],
	noUnit: true,
    //tvs: {},
	oem: undefined,
	htmlTitle: '我',
};
