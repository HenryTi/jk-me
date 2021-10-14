import { CObjects } from "./CObjects";
import { VAgents } from "./VAgents";

export class CAgents extends CObjects {
    protected list: any[];

    get baseList(): any[] {return this.list}

    protected get caption(): string {return '轻代理';}

    protected async internalLoadList(): Promise<void> {
        let ret = await this.uqs.JkMe.GetAgents.query({});
        this.list = ret.ret;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VAgents);
    }
}

