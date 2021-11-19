import { observable } from "mobx";
import { Tonva, Web } from "tonva-core";
import { WebReact } from "./app";

export class TonvaReact extends Tonva {
    createWeb(): Web {return new WebReact();}

    createObservableMap<K, V>(): Map<K, V> {
        return observable.map({}, {deep: false});
    }
}
