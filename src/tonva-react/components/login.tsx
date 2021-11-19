import { Tonva, User } from 'tonva-core';

export interface Login {
	showLogin(callback?: (user:User)=>Promise<void>, withBack?:boolean):void;
	showLogout(callback?: ()=>Promise<void>):void
	//showRegister():void
	//showForget():void
	showChangePassword():void;
	showUserQuit():void;
}

export async function createLogin(tonva: Tonva):Promise<Login> {
	let importCLogin = await import('../auth/CLogin');
	return new importCLogin.CLogin(tonva);
}

export async function showRegister(tonva: Tonva):Promise<void> {
	let importCRegister = await import('../auth/register/CRegister');
	let c = new importCRegister.CRegister(tonva);
	c.start();
}

export async function showForget(tonva: Tonva):Promise<void> {
	let importCRegister = await import('../auth/register/CRegister');
	let c = new importCRegister.CForget(tonva);
	c.start();
}
