//import { AppConfig, CAppBase } from "./app";
//import { Nav } from "./nav";
import { TVs, UQsMan } from "./uqCore";
import { Web } from "./web";

export class Tonva {
    //private uqsConfig: AppConfig;
    constructor(/*uqsConfig: AppConfig, nav:Nav, tvs:TVs, observ:Observ*/) {
        //this.uqsConfig = uqsConfig;
        //this.observ = observ;
//        this.nav = nav;
        //this.web = new Web();
        this.uqsMan = new UQsMan(this.web, undefined/*, tvs*/);
    }

//    readonly nav: Nav;
    readonly web: Web;
    readonly uqsMan: UQsMan;

/*
    async start<E>(CApp: new (config: AppConfig) => CAppBase<E, any>, appConfig: AppConfig, isUserLogin?:boolean) {
        if (appConfig) {
            let {htmlTitle} = appConfig;
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
    
        let cApp = new CApp(appConfig);
        await cApp.start(isUserLogin);
    }

    async startPage<E>(CApp: new (config: AppConfig) => CAppBase<E, any>, appConfig: AppConfig) {
        this.nav.setSettings(appConfig);
    
        let cApp = new CApp(appConfig);
        cApp.internalInit();
        await cApp.start();
    }
*/
}
