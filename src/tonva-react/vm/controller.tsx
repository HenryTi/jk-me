import _ from 'lodash';
import { User, env, resOptions } from 'tonva-core';
import { t } from '../ui';
import { Page, PageHeaderProps, PageWebNav } from '../components';
import { nav } from '../nav';
import { VPage } from './vpage';
import { View } from './view';
// import { messageHub } from 'tonva-core';

export interface ConfirmOptions {
    caption?: string;
    message: string | JSX.Element;
    classNames?: string;
    ok?: string;
    yes?: string;
    no?: string;
}

export interface WebNav<C extends Controller> {
	VNavHeader?: new (controller: C) => View<C>;
	VNavRawHeader?: new (controller: C) => View<C>;
	VNavFooter?: new (controller: C) => View<C>;
	VNavRawFooter?: new (controller: C) => View<C>;
	renderPageHeader?: (props: PageHeaderProps) => JSX.Element;
}

export abstract class Controller {
	protected res: any = {};
	t = (str: string): string|JSX.Element => this.internalT(str) || str;
    icon: string|JSX.Element;
    label:string|JSX.Element;
	readonly isDev:boolean = env.isDevelopment;
	pageWebNav: PageWebNav;
    get user():User {return nav.user}
    get isLogined():boolean {
        let {user} = nav;
        if (!user) return false;
        return user.id > 0;
    }

	protected beforeInit() {}
	protected afterInit() {}

    internalInit(...param: any[]) {
		this.beforeInit();
        this.init(...param);
		this.pageWebNav = this.getPageWebNav();        
		this.afterInit();
    }

	init(...param: any[]) {
	}

	internalT(str:string):any {
		return this.res?.[str] ?? t(str);
	}

	get webNav(): WebNav<any> {return undefined;}

	getWebNav(): WebNav<any> {return this.webNav;}

	getPageWebNav(): PageWebNav {return undefined;}

	get isWebNav(): boolean {return nav.isWebNav}
	navigate(url:string) {
		nav.navigate(url);
	}
	
	setRes(res: any) {
		if (res === undefined) return;
		let {$lang, $district} = resOptions;
		_.merge(this.res, res);
		if ($lang !== undefined) {
			let l = res[$lang];
			if (l !== undefined) {
				_.merge(this.res, l);
				let d = l[$district];
				if (d !== undefined) {
					_.merge(this.res, d);
				}
			}
		}		
	}
	getRes():any {return this.res;}

    protected async openVPage<C extends Controller, P extends VPage<C>>(vp: new (controller: C)=>P, param?:any, afterBack?:(ret:any)=>void):Promise<P> {
		let ret = new vp((this as any) as C);
		await ret.open(param, afterBack);
		return ret;
    }

    protected async replaceVPage<C extends Controller, P extends VPage<C>>(vp: new (controller: C)=>P, param?:any, afterBack?:(ret:any)=>void):Promise<P> {
		let ret = new vp((this as any) as C);
		await ret.replaceOpen(param, afterBack);
		return ret;
    }

    protected renderView<C extends Controller, V extends View<C>>(view: new (controller: C)=>V, param?:any):JSX.Element {
		let v = new view((this as any) as C);
		return v.render(param);
    }

    async event(type:string, value:any) {
        await this.onEvent(type, value);
    }

    protected async onEvent(type:string, value:any) {
    }

    protected msg(text:string) {
        alert(text);
    }
    protected errorPage(header:string, err:any) {
        this.openPage(<Page header="App error!">
            <pre>
                {typeof err === 'string'? err : err.message}
            </pre>
        </Page>);
    }

    openPage(page:JSX.Element, onClosePage?: (ret:any)=>void) {
		let disposer: ()=>void;
		if (onClosePage !== undefined) {
			disposer = () => {
				//if (this.disposer) this.disposer();
				onClosePage(undefined);
			}
		}

        nav.push(page, disposer);
        //this.disposer = undefined;
    }

    replacePage(page:JSX.Element, onClosePage?: ()=>void) {
        nav.replace(page, onClosePage);
        //this.disposer = undefined;
    }

    backPage() {
        nav.back();
    }

    closePage(level?:number) {
        nav.pop(level);
    }

    ceasePage(level?:number) {
        nav.ceaseTop(level);
	}
	
	go(showPage:()=>void, url:string, absolute?:boolean) {
		nav.go(showPage, url, absolute);
	}

    removeCeased() {
        nav.removeCeased();
    }

    regConfirmClose(confirmClose: ()=>Promise<boolean>) {
        nav.regConfirmClose(confirmClose);
	}

	private topPageKey:any;
	protected startAction() {
		this.topPageKey = nav.topKey();
    }
    get TopKey() {
        return this.topPageKey;
    }
    SetTopKey(key:any) {
        this.topPageKey = key;
    }
	public popToTopPage() {
		nav.popTo(this.topPageKey);
	}

    async confirm(options: ConfirmOptions): Promise<'ok'|'yes'|'no'|undefined> {
        return new Promise<'ok'|'yes'|'no'|undefined> (async (resolve, reject) => {
            let {caption, message, ok, yes, no, classNames} = options;
            let close = (res:'ok'|'yes'|'no'|undefined) => {
                this.closePage();
                resolve(res);
            }
            let buttons:any[] = [];
            if (ok !== undefined) {
                buttons.push(<button key="ok" className="btn btn-primary me-3" onClick={()=>close('ok')}>{ok}</button>);
            }
            if (yes !== undefined) {
                buttons.push(<button key="yes" className="btn btn-success me-3" onClick={()=>close('yes')}>{yes}</button>);
            }
            if (no !== undefined) {
                buttons.push(<button key="no" className="btn btn-outline-danger me-3" onClick={()=>close('no')}>{no}</button>);
            }
            this.openPage(<Page header={caption || '请确认'} back="close">
                <div className={classNames || "rounded bg-white m-5 p-3 border"}>
                    <div className="d-flex align-items-center justify-content-center">
                        {message}
                    </div>
                    <div className="mt-3 d-flex align-items-center justify-content-center">
                        {buttons}
                    </div>
                </div>
            </Page>);
            nav.regConfirmClose(async ():Promise<boolean> => {
                resolve(undefined);
                return true;
            });
        });
    }
}
