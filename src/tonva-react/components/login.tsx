import { User, Web } from 'tonva-core';

export interface Login {
	showLogin(callback?: (user:User)=>Promise<void>, withBack?:boolean):void;
	showLogout(callback?: ()=>Promise<void>):void
	//showRegister():void
	//showForget():void
	showChangePassword():void;
	showUserQuit():void;
}

export async function createLogin(web: Web):Promise<Login> {
	let importCLogin = await import('../auth/CLogin');
	return new importCLogin.CLogin(web);
}

export async function showRegister(web: Web):Promise<void> {
	let importCRegister = await import('../auth/register/CRegister');
	let c = new importCRegister.CRegister(web);
	c.start();
}

export async function showForget(web: Web):Promise<void> {
	let importCRegister = await import('../auth/register/CRegister');
	let c = new importCRegister.CForget(web);
	c.start();
}
