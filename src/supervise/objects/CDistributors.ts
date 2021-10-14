import { VDistributors } from "./VDistributors";
import { CObjects } from "./CObjects";

export class CDistributors extends CObjects {
    protected list: any[];

    get baseList(): any[] {return this.list}

    protected get caption(): string {return '经销商'}

    protected async internalLoadList(): Promise<void> {
        let ret = await this.uqs.JkMe.GetDistributors.query({});
        this.list = ret.ret;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VDistributors);
    }
}

