import { UQsMan } from "tonva-core";
import { UqReact } from "./UqReact";

export class UQsReact {
    //private readonly uqsMan: UQsMan;
	private readonly uqReacts: {[key:string]:any};
    constructor(uqsMan: UQsMan) {
        //this.uqsMan = uqsMan;
        const uqReacts: {[key:string]:any} = this.uqReacts = {};
		function setUq(uqKey: string, proxy: any):void {
			if (!uqKey) return;
			let lower = uqKey.toLowerCase();
			uqReacts[uqKey] = proxy;
			if (lower !== uqKey) uqReacts[lower] = proxy;
		}
        for (let uqMan of uqsMan.uqMans) {
            let uqReact = new UqReact(uqMan);
			let proxy = uqReact.createProxy();
			setUq(uqMan.getUqKey(), proxy);
			setUq(uqMan.getUqKeyWithConfig(), proxy);
        }
    }

    createProxy() {
        return new Proxy(this.uqReacts, {
            get: (target, key, receiver) => {
                let lk = (key as string).toLowerCase();
                let ret = target[lk];
                if (ret !== undefined) return ret;
                debugger;
                console.error(`controller.uqs.${String(key)} undefined`);
                this.showReload(`新增 uq ${String(key)}`);
                return undefined;
            },
        });
    }

    private showReload(msg: string) {
		for (let uqReact of this.uqReacts) {
			uqReact.localMap.removeAll();
		}
        this.web.showReloadPage(msg);
    }
}
