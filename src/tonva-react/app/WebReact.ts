import { Web } from "tonva-core";
import { nav } from '../nav';

export class WebReact extends Web {
    async navInit(): Promise<void> {
        await nav.init();
    }
}
