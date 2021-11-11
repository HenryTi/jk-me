//=== UqApp builder created on Wed Mar 10 2021 16:02:48 GMT-0500 (GMT-05:00) ===//
//import { start, nav } from 'tonva-react';
import { CApp } from './CApp';
//import { appConfig } from './appConfig';

export const App: React.FC = () => {
	return new CApp().renderApp();
	/*
	nav.setSettings(appConfig);
	const onLogined = async (isUserLogin?:boolean) => {
		await start(CApp, appConfig, isUserLogin);
	}
	nav.appStart();
	return nav.renderNavView(onLogined);
	*/
	//return <NavView onLogined={onLogined} />;
}
