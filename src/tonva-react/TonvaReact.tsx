import { makeObservable, observable } from "mobx";
import { FetchError, Nav, NavPage, Tonva, User, Web } from "tonva-core";
import { WebReact } from "./app";

import {Page} from './components';

import 'font-awesome/css/font-awesome.min.css';
import './css/va-form.css';
import './css/va.css';
import './css/animation.css';
import { ReloadPage, ConfirmReloadPage } from './components/reloadPage';
//import { PageWebNav } from './components/page';
import { createLogin, Login, showForget, showRegister } from './components/login';
//import { env, FetchError, LocalData, User } from 'tonva-core';
import { SystemNotifyPage } from './nav/FetchErrorView';
import { NavView } from './nav';

//export type NavPage = (params:any) => Promise<void>;

export class TonvaReact extends Tonva {
    navView:NavView;

    constructor() {
        super();
		makeObservable(this, {
			user: observable,
		});
    }

    createWeb(): Web {return new WebReact();}

    createObservableMap<K, V>(): Map<K, V> {
        return observable.map({}, {deep: false});
    }

    set(navView:NavView) {
        //this.logo = logo;
        this.navView = navView;
	}

    get nav(): Nav<JSX.Element> {return this.navView};

    renderNavView(onLogined: (isUserLogin?:boolean)=>Promise<void>,
        notLogined?: ()=>Promise<void>,
	    userPassword?: () => Promise<{user:string; password:string}>,
    )
    {
        return <NavView ref={nv => this.navView = nv} 
            onLogined={onLogined}
            notLogined={notLogined}
            userPassword={userPassword} />;
    }

    /*
	setIsWebNav() {
		this.isWebNav = true;
		this.navView.backIcon = <i className="fa fa-arrow-left" />;
		this.navView.closeIcon = <i className="fa fa-close" />;
	}
    */

	// pageWebNav: PageWebNav;

    async showAppView(isUserLogin?: boolean):Promise<void> {
        let {onLogined} = this.navView.props;
        if (onLogined === undefined) {
            this.push(<div>NavView has no prop onLogined</div>);
            return;
        }
        this.clear();
        await onLogined(isUserLogin);
    }


    privacyEntry() {
        if (!this.getPrivacyContent()) return;
        return <div className="text-center">
            <button className="btn btn-sm btn-link"
                onClick={this.showPrivacyPage}>
                <small className="text-muted">隐私政策</small>
            </button>
        </div>;
    }

    private getPrivacyContent():string {
        if (!this.navSettings) return;
        let {privacy} = this.navSettings;
        return privacy;
    }

    showPrivacyPage = () => {
        let privacy = this.getPrivacyContent();
        if (privacy) {
            this.privacyPage(privacy);
        }
        else {
            this.push(<Page header="隐私政策">
                <div className="p-3">AppConfig 中没有定义 privacy。可以定义为字符串，或者url。markdown格式</div>
            </Page>);
        }
    }

    private privacyPage = async (htmlString: string) => {
        //let html = await this.getPrivacy(privacy);
		//let content = {__html: marked(html)};
		let content = {__html: htmlString};
        this.push(<Page header="隐私政策">
            <div className="p-3" dangerouslySetInnerHTML={content} />
        </Page>);
    }

	private createLogin = createLogin;
	setCreateLogin(createLogin: (tonva:Tonva)=>Promise<Login>) {
		this.createLogin = createLogin;
	}

    async changePassword() {
		let login = await this.getLogin();
		login.showChangePassword();
    }

    async userQuit() {
        let login = await this.getLogin();
        login.showUserQuit();
    }

	private navLogin:NavPage = async (params:any) => {
		this.showLogin(async (user: User) => window.history.back(), false);
	}

	private navLogout:NavPage = async (params:any) => {
		this.showLogout(async () => window.history.back());
	}

	private navRegister:NavPage = async (params:any) => {
		this.showRegister();
	}

	private navForget:NavPage = async (params:any) => {
		this.showForget();
	}

	private login: Login;
	private async getLogin():Promise<Login> {
		if (this.login) return this.login;
		return this.login = await this.createLogin(this);
	}
	async showLogin(callback?: (user:User)=>Promise<void>, withBack?:boolean) {
		let login = await this.getLogin();
		login.showLogin(callback, withBack);
    }

    async showLogout(callback?: ()=>Promise<void>) {
		let login = await this.getLogin();
		login.showLogout(callback);
	}
	
	async showRegister() {
		showRegister(this);
	}

	async showForget() {
		showForget(this);
	}

    resetAll = () => {
        this.push(<ConfirmReloadPage confirm={(ok:boolean):Promise<void> => {
            if (ok === true) {
                this.showReloadPage('彻底升级');
				localStorage.clear();
				/*
                this.local.readToMemory();
                env.localDb.removeAll();
				this.local.saveToLocalStorage();
				*/
            }
            else {
                this.pop();
            }
            return;
        }} />);
    }

    async checkVersion():Promise<string> {
        let {href} = document.location;
        href += (href.indexOf('?')>=0? '&':'?') + '_t_t_=' + new Date().getTime();
        let ret = await fetch(href);
        let r = await ret.text();
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(r, 'text/html');
        let elHtml = htmlDoc.getElementsByTagName('html');
        let newVersion = elHtml[0].getAttribute('data-version');
        return newVersion;
    }

    showReloadPage(msg: string) {
        let seconds = -1;
		this.push(<ReloadPage message={msg} seconds={seconds} />);
		/*
		if (seconds > 0) {
			env.setTimeout(undefined, this.reload, seconds*1000);
		}
		*/
    }

    get level(): number {
        return this.navView.level;
    }
    startWait() {
        this.navView?.startWait();
    }
    endWait() {
        this.navView?.endWait();
    }
    async onError(fetchError: FetchError)
    {
        let err = fetchError.error;
        if (err !== undefined) {
            if (err.unauthorized === true) {
				await this.showLogin(undefined);
				//nav.navigateToLogin();
                return;
            }
            switch (err.type) {
                case 'unauthorized':
                    await this.showLogin(undefined);
					//nav.navigateToLogin();
                    return;
                case 'sheet-processing':
                    this.push(<SystemNotifyPage message="单据正在处理中。请重新操作！" />);
                    return;
            }
        }
        this.navView.setState({
            fetchError,
        });
    }

    private upgradeUq = () => {
        this.start();
    }

    async showUpgradeUq(uq:string, version:number):Promise<void> {
        this.show(<Page header={false}>
            <div>
                UQ升级了，请点击按钮升级 <br />
                <small className="text-muted">{uq} ver-{version}</small>
                <button className="btn btn-primary" onClick={this.upgradeUq}>升级</button>
            </div>
        </Page>)
    }

    show (view: JSX.Element, disposer?: ()=>void): void {
        this.navView.show(view, disposer);
    }
    push(view: JSX.Element, disposer?: ()=>void): void {
        this.navView.push(view, disposer);
    }
    replace(view: JSX.Element, disposer?: ()=>void): void {
        this.navView.replace(view, disposer);
    }
    pop(level:number = 1) {
        this.navView.pop(level);
    }
    topKey():number {
        return this.navView.topKey();
    }
    popTo(key:number) {
        this.navView.popTo(key);
    }
    clear() {
        this.navView?.clear();
    }
    navBack() {
        this.navView.navBack();
    }
    ceaseTop(level?:number) {
        this.navView.ceaseTop(level);
    }
    removeCeased() {
        this.navView.removeCeased();
    }
    async back(confirm:boolean = true) {
        await this.navView.back(confirm);
    }
    regConfirmClose(confirmClose: ()=>Promise<boolean>) {
        this.navView.regConfirmClose(confirmClose);
    }
    confirmBox(message?:string): boolean {
        return this.navView.confirmBox(message);
	}
	/*
    async navToApp(url: string, unitId: number, apiId?:number, sheetType?:number, sheetId?:number):Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let sheet = this.centerHost.includes('http://localhost:') === true? 'sheet_debug':'sheet'
            let uh = sheetId === undefined?
                    appUrl(url, unitId) :
                    appUrl(url, unitId, sheet, [apiId, sheetType, sheetId]);
            console.log('navToApp: %s', JSON.stringify(uh));
            nav.push(<article className='app-container'>
                <span id={uh.hash} onClick={()=>this.back()}/>
                    <i className="fa fa-arrow-left" />
                </span>
                {
                    // eslint-disable-next-line 
                    <iframe src={uh.url} title={String(sheetId)} />
                }
            </article>, 
            ()=> {
                resolve();
            });
        });
    }

    navToSite(url: string) {
        // show in new window
        window.open(url);
	}
	*/
	openSysPage(url: string):boolean {
		let navPage: NavPage = this.sysRoutes[url];
		if (navPage === undefined) {
			//alert(url + ' is not defined in sysRoutes');
			return false;
		}
		navPage(undefined);
		return true;
	}

	private navPageRoutes: {[url:string]: NavPage};
	private routeFromNavPage(navPage: NavPage) {
		return (params: any, queryStr: any) => {
			if (navPage) {
				if (this.nav.isWebNav) this.clear();
				navPage(params);
			}
		}
	}
	onNavRoute(navPage: NavPage) {
		this.on(this.routeFromNavPage(navPage));
	}
	private doneSysRoutes:boolean = false;
	private sysRoutes: { [route: string]: NavPage } = {
		'/login': this.navLogin,
		'/logout': this.navLogout,
		'/register': this.navRegister,
		'/forget': this.navForget,
	}
	/*
	onSysNavRoutes() {
		this.onNavRoutes(this.sysRoutes);
	}
	*/
	onNavRoutes(navPageRoutes: {[url:string]: NavPage}) {
		if (this.doneSysRoutes === false) {
			this.doneSysRoutes = true;
			this.internalOnNavRoutes(this.sysRoutes);
		}
		this.internalOnNavRoutes(navPageRoutes);
	}

	private internalOnNavRoutes(navPageRoutes: {[url:string]: NavPage}) {
		if (!navPageRoutes) return;
		this.navPageRoutes = Object.assign(this.navPageRoutes, navPageRoutes);
		let navOns: { [route: string]: (params: any, queryStr: any) => void } = {};
		for (let route in navPageRoutes) {
			let navPage = navPageRoutes[route];
			navOns[route] = this.routeFromNavPage(navPage);
		}
		this.on(navOns);
	}

}
