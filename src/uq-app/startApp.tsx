import React from 'react';
import ReactDOM from 'react-dom';
import { NavView, start, TonvaReact } from "tonwa";
import { CApp } from './CApp';
import { appConfig } from './appConfig';
// import { App } from './App';

export async function startApp() {
    let tonva = new TonvaReact();
    //initNav(tonva);
    tonva.setSettings(appConfig);
    const onLogined = async (isUserLogin?: boolean) => {
        await start(CApp, tonva, appConfig, isUserLogin);
    }
    const notLogined: () => Promise<void> = undefined;
    const userPassword: () => Promise<{ user: string; password: string }> = undefined;
    tonva.appStart();
    ReactDOM.render(
        <React.StrictMode>
            <NavView ref={navView => tonva.set(navView)}
                onLogined={onLogined}
                notLogined={notLogined}
                userPassword={userPassword} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
