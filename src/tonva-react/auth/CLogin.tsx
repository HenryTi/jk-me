import { User } from 'tonva-core';
import { Login } from '../components';
import { ControllerWithWeb, VPage } from "../vm";
import { VLogout } from './VLogout';
import { VLogin } from './VLogin';
import { CenterAppApi } from 'tonva-core';
import { VChangePassword } from './VChangePassword';
import { VUserQuit } from './VUserQuit';

export class CLogin extends ControllerWithWeb implements Login {
	protected async internalStart() {
	}

	async showLogin(callback?: (user:User)=>Promise<void>, withBack?:boolean):Promise<void> {
		let onLogin = async (un:string, pwd:string):Promise<boolean> => {
			let user = await this.web.userApi.login({
				user: un,
				pwd: pwd,
				guest: this.tonva.guest,
			});
	
			if (user === undefined) return false;
			console.log("onLoginSubmit: user=%s pwd:%s", user.name, user.token);
			await this.tonva.userLogined(user, callback);
			return true;
		}
		this.openVPage(VLogin, {onLogin, withBack});
    }

    async showLogout(callback?: ()=>Promise<void>) {
		this.openVPage(VLogout, () => {
			this.tonva.logout(callback);
		});
	}
	/*
	async showRegister() {
		let cRegister = new (await import('./register')).CRegister(this.res);
		await cRegister.start();
	}

	async showForget() {
		let cForget = new (await import('./register')).CForget(this.res);
		await cForget.start();
	}
	*/

	protected getVChangePassword():new (cLogin:CLogin) => VPage<CLogin> {
		return VChangePassword;
	}
	async showChangePassword() {
		let vPage = this.getVChangePassword();
		this.openVPage(vPage, async (orgPassword:string, newPassword:string):Promise<boolean> => {
			let centerAppApi = new CenterAppApi(this.web, 'tv/', undefined);
			let ret = await centerAppApi.changePassword({orgPassword, newPassword});
			return ret;
		});
    }

	async showUserQuit():Promise<void> {
		this.openVPage(VUserQuit);
	}
}
