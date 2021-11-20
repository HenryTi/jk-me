//=== UqApp builder created on Wed Mar 10 2021 16:02:48 GMT-0500 (GMT-05:00) ===//
//import { nav } from 'tonva-react';
import { tonva } from 'tonva-core';
import { appConfig } from './appConfig';

export const App: React.FC = () => {
	tonva.setSettings(appConfig);
	const onLogined = async (isUserLogin?:boolean) => {
		// await start(CApp, appConfig, isUserLogin);
	}
	tonva.appStart();
	return tonva.nav.renderNavView(onLogined);
	//return <NavView onLogined={onLogined} />;
}
