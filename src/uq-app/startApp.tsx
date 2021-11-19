import React from 'react';
import ReactDOM from 'react-dom';
import { initNav, nav, NavView, start, TonvaReact } from 'tonva-react';
import { CApp } from './CApp';
import { appConfig } from './appConfig';
// import { App } from './App';

export async function startApp() {
    let tonva = new TonvaReact();
    initNav(tonva);
	nav.setSettings(appConfig);
	const onLogined = async (isUserLogin?:boolean) => {
		await start(CApp, tonva, appConfig, isUserLogin);
	}
    const notLogined: ()=>Promise<void> = undefined;
    const userPassword: () => Promise<{user:string; password:string}> = undefined;
	nav.appStart();
    ReactDOM.render(
        <React.StrictMode>
            <NavView ref={navView => nav.set(navView)} 
                onLogined={onLogined}
                notLogined={notLogined}
                userPassword={userPassword} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
