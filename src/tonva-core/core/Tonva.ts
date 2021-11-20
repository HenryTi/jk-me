import { Hooks, NamedRoute, Nav, resOptions, RouteFunc, Web } from "tonva-core";
import { User, Guest } from 'tonva-core';
//import { netToken } from 'tonva-core';
//import { FetchError } from 'tonva-core';
import { LocalData, env } from 'tonva-core';
//import { NavView } from './NavView';
import { Navigo } from './Navigo';

export interface NavSettings {
    oem?: string;
    loginTop?: JSX.Element;
    privacy?: string;
	htmlTitle?: string;
}

let logMark: number;
const logs:string[] = [];

export let tonva: Tonva;

export abstract class Tonva {
    readonly web: Web;
    constructor() {
        tonva = this;
        this.web = this.createWeb();
        let {lang, district} = resOptions;
        this.language = lang;
        this.culture = district;
		this.testing = false;
    }

    abstract createWeb(): Web;
    abstract createObservableMap<K, V>(): Map<K, V>;
    abstract get nav(): Nav;

//    private readonly tonva:Tonva;
//    private readonly web: Web;
//    private navView:NavView;
	private wsHost: string;
    private local: LocalData = new LocalData();
	private navigo: Navigo;
	//isWebNav:boolean = false;
	navSettings: NavSettings;
    user: User = null;
    testing: boolean;
    language: string;
    culture: string;
    resUrl: string;

    get guest(): number {
        let guest = this.local.guest;
        if (guest === undefined) return 0;
        let g = guest.get();
        if (g === undefined) return 0;
        return g.guest;
    }
	/*
    registerReceiveHandler(handler: (message:any)=>Promise<void>):number {
        //if (this.ws === undefined) return;
        return messageHub.onReceiveAny(handler);
    }

    unregisterReceiveHandler(handlerId:number) {
        //if (this.ws === undefined) return;
        if (handlerId === undefined) return;
        messageHub.endReceive(handlerId);
    }
	*/
    async onReceive(msg:any) {
        //if (this.ws === undefined) return;
        await this.web.messageHub.dispatch(msg);
    }

	private async loadUnitJson() {
		try {
			let unitJsonPath = this.unitJsonPath();
			let unitRes = await fetch(unitJsonPath, {});
			let res = await unitRes.json();
			return res.unit;
		}
		catch (err1) {
			this.local.unit.remove();
			return;
		}
	}

    private async getPredefinedUnitName() {		
		let el = document.getElementById('unit');
		if (el) {
			return el.innerText;
		}
		el = document.getElementById('unit.json');
		if (!el) {
			return await this.loadUnitJson();
		}
		try {
            let json = el.innerHTML;
            let res = JSON.parse(json);
            return res.unit;
        }
        catch (err) {
			return await this.loadUnitJson();
        }
    }

    private async loadPredefinedUnit() {
        let envUnit = process.env.REACT_APP_UNIT;
        if (envUnit !== undefined) {
            return Number(envUnit);
        }
        let unitName:string;
        let unit = this.local.unit.get();
        if (unit !== undefined) {
            if (env.isDevelopment !== true) return unit.id;
            unitName = await this.getPredefinedUnitName();
            if (unitName === undefined) return;
            if (unit.name === unitName) return unit.id;
        }
        else {
            unitName = await this.getPredefinedUnitName();
            if (unitName === undefined) return;
        }
        let unitId = await this.web.guestApi.unitFromName(unitName);
        if (unitId !== undefined) {
            this.local.unit.set({id: unitId, name: unitName});
        }
        return unitId;
    }

    setSettings(settings?: NavSettings) {
        this.navSettings = settings;
		let {htmlTitle} = settings;
		if (htmlTitle) {
			document.title = htmlTitle;
		}
		let html = document.getElementsByTagName('html');
		let html0 = html[0];
		if (html0) {
			let version = html0?.getAttribute('data-version');
			if (version) {
				//appConfig.version = version;
			}
		}		
	}

    get oem():string {
        return this.navSettings && this.navSettings.oem;
    }

    hashParam: string;
    private centerHost: string;
    private arrs = ['/test', '/test/'];
    private unitJsonPath():string {
        let {origin, pathname} = document.location;
		pathname = pathname.toLowerCase();
        for (let item of this.arrs) {
            if (pathname.endsWith(item) === true) {
                pathname = pathname.substr(0, pathname.length - item.length);
                break;
            }
        }
        if (pathname.endsWith('/') === true || pathname.endsWith('\\') === true) {
            pathname = pathname.substr(0, pathname.length-1);
        }
        return origin + pathname + '/unit.json';
    }
    private windowOnError = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
		debugger;
        console.error('windowOnError');
        console.error(error);
    }
    private windowOnUnhandledRejection = (ev: PromiseRejectionEvent) => {
		debugger;
        console.error('windowOnUnhandledRejection');
        console.error(ev.reason);
    }
    private windowOnClick = (ev: MouseEvent) => {
        console.error('windowOnClick');
    }
    private windowOnMouseMove = (ev: MouseEvent) => {
        console.log('navigator.userAgent: ' + navigator.userAgent);
        console.log('mouse move (%s, %s)', ev.x, ev.y);
    }
    private windowOnScroll = (ev: Event) => {
        console.log('scroll event');
	}

	forceDevelopment:boolean;
	
	async init() {
		this.testing = env.testing;
		if (this.forceDevelopment === true) {
			env.isDevelopment = true;
		}
		await this.web.host.start(this.testing);
		/*
		let hash = document.location.hash;
		if (hash !== undefined && hash.length > 0) {
			let pos = getExHashPos();
			if (pos < 0) pos = undefined;
			this.hashParam = hash.substring(1, pos);
		}
		*/
		let {url, ws, resHost} = this.web.host;
		this.centerHost = url;
		this.resUrl = this.web.resUrlFromHost(resHost);
		this.wsHost = ws;
		this.web.setCenterUrl(url);

		let guest:Guest = this.local.guest.get();
		if (guest === undefined) {
			guest = await this.web.guestApi.guest();
		}
		if (!guest) {
			debugger;
			throw Error('guest can not be undefined');
		}
		this.setGuest(guest);
	}

	reloadUser = () => {
		let user: User = this.local.user.get();
		let curUser = this.user;
		if (!user && !curUser) return;
		if (user?.id === curUser?.id) return;
		if (!user) {
			this.logout();
		}
		else {
			this.logined(user);
		}
	}

    //private appStarted:boolean = false;
    async appStart() {
        //if (this.appStarted === true) return;
        //this.appStarted = true;
        await this.init();
        await this.start();
    }

    protected abstract startWait(): void;
    protected abstract endWait(): void;
    protected abstract showLogin(callback?: (user:User)=>Promise<void>, withBack?:boolean): Promise<void>;

    async start() {
        try {
            window.onerror = this.windowOnError;
            window.onunhandledrejection = this.windowOnUnhandledRejection;
            window.onfocus = this.reloadUser;
            if (env.isMobile === true) {
                document.onselectstart = function() {return false;}
                document.oncontextmenu = function() {return false;}
            }
			this.clear();
			this.startWait();
            
            let user: User = this.local.user.get();
            if (user === undefined) {
                throw new Error('to be implemented');
                /*
                let {userPassword} = this.navView.props;
				if (userPassword) {
					let ret = await userPassword();
					if (ret) {
						let {user:userName, password} = ret;
						let logindUser = await this.web.userApi.login({
							user: userName,
							pwd: password,
							guest: this.guest,
						});
						user = logindUser;
					}
				}
				if (user === undefined) {
					let {notLogined} = this.navView.props;
					if (notLogined !== undefined) {
						await notLogined();
					}
					else {
						await this.showLogin(undefined);
						//nav.navigateToLogin();
					}
					return;
				}
                */
            }

            await this.logined(user);
        }
        catch (err) {
			console.error(err);
			debugger;
        }
        finally {
            this.endWait();
        }
	}

	resolveRoute() {
		//if (this.isRouting === false) return;
		if (this.navigo === undefined) return;
		this.navigo.resolve();
	}

	on(routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	on(url:string, routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	on(regex:RegExp, routeFunc:RouteFunc, hooks?:Hooks):Navigo;
	on(options: {[url:string]: RouteFunc|NamedRoute}):Navigo;
	on(...args:any[]):Navigo {
		if (this.navigo === undefined) {
			this.navigo = new Navigo();
			if (this.nav.isWebNav !== true) this.navigo.historyAPIUpdateMethod('replaceState');
		}
		return this.navigo.on(args[0], args[1], args[2]);
	}

	navigateToLogin() {
		this.navigate('/login');
	}

	navigate(url:string, absolute?:boolean) {
		if (!this.navigo) {
			alert('Is not in webnav state, cannot navigate to url "' + url + '"');
			return;
		}
		if (this.testing === true) {
			url += '#test';
		}
		return this.navigo.navigate(url, absolute);
	}

	go(showPage:()=>void, url:string, absolute?:boolean) {
		if (this.navigo !== undefined) {
			this.navigate(url, absolute);
		}
		else {
			showPage();
		}
	}

    abstract showAppView(isUserLogin?: boolean):Promise<void>;

    setGuest(guest: Guest) {
        this.local.guest.set(guest);
        this.web.setNetToken(0, guest.token);
    }

    saveLocalUser() {
        this.local.user.set(this.user);
    }

	setUqRoles(uq:string, roles:string[]) {
		let {roles:userRoles} = this.user;
		if (!userRoles) {
			this.user.roles = {};
		}
		this.user.roles[uq] = roles;
		this.local.user.set(this.user);
	}

    async loadMe() {
        let me = await this.web.userApi.me();
        this.user.icon = me.icon;
        this.user.nick = me.nick;
    }

	private async internalLogined(user: User, callback: (user:User)=>Promise<void>, isUserLogin:boolean) {
        this.web.logoutApis();
        this.user = user;
        this.saveLocalUser();
		this.web.setNetToken(user.id, user.token);
		this.clear();

		await this.onChangeLogin?.(this.user);
        if (callback !== undefined) {
            await callback(user);
		}
        else if (this.nav.isWebNav === true) {
			this.navigate('/index');
		}
		else {
            await this.showAppView(isUserLogin);
        }
	}

	onChangeLogin: (user:User) => Promise<void>;

	// 缓冲登录
    async logined(user: User, callback?: (user:User)=>Promise<void>) {
		await this.internalLogined(user, callback, false);
    }

	// 用户操作之后登录
    async userLogined(user: User, callback?: (user:User)=>Promise<void>) {
		await this.internalLogined(user, callback, true);
    }

    loginTop(defaultTop:JSX.Element) {
        return (this.navSettings && this.navSettings.loginTop) || defaultTop;
    }

    async logout(callback?:()=>Promise<void>) { //notShowLogin?:boolean) {
		this.local.logoutClear();
        this.user = undefined; //{} as User;
        this.web.logoutApis();
        let guest = this.local.guest.get();
        this.web.setCenterToken(0, guest && guest.token);
		this.clear();
        if (callback === undefined)
            await this.start();
        else
            await callback();
		this.onChangeLogin?.(undefined);
	}

    abstract clear(): void;

    get logs() {return logs};
    log(msg:string) {
        logs.push(msg);
    }
    logMark() {
        let date = new Date();
        logMark = date.getTime();
        logs.push('log-mark: ' + date.toTimeString());
    }
    logStep(step:string) {
        logs.push(step + ': ' + (new Date().getTime() - logMark));
    }

    reload = async () => {
        let waiting:Promise<void> = new Promise<void>((resolve, reject) => {
            setTimeout(resolve, 100);
        });

        if ('serviceWorker' in navigator) {
            let registration =await Promise.race([waiting, navigator.serviceWorker.ready]);
            if (registration) registration.unregister();
        }
		window.document.location.reload();
		// dcloud hbuilder里面的app自动升级，需要清webview的缓存
		let plus = (window as any).plus;
		if (plus) {
			let webview = plus.webview;
			if (webview) {
				if (webview.reload) webview.reload(true);
			}
			else {
				let webView = plus.webView;
				if (webView) {
					if (webView.reload) webView.reload(true);
				}
			}
			//plus.webview.reload(true)
		}
    }

    abstract privacyEntry():void;
    abstract showLogout(callback?: ()=>Promise<void>): Promise<void>;
    abstract openSysPage(url: string):boolean;
    abstract changePassword(): Promise<void>;
    abstract userQuit(): Promise<void>;
    abstract resetAll: () => void;
}
