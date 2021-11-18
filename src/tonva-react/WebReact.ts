import { observable } from "mobx";
import { Web } from "tonva-core";
import { nav } from './nav';

export class WebReact extends Web {
    async navInit(): Promise<void> {
        await nav.init();
    }

    createObservableMap<K, V>(): Map<K, V> {
        return observable.map({}, {deep: false});
        //return new ObservableMap<K, V>({}, );
    }
}
