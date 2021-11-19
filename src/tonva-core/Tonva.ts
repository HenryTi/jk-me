import { Web } from "tonva-core";

export abstract class Tonva {
    readonly web: Web;
    constructor() {
        this.web = this.createWeb();
    }

    abstract createWeb(): Web;
    abstract createObservableMap<K, V>(): Map<K, V>;
}
