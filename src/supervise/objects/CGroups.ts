import { CObjects } from "./CObjects";
import { VGroups } from "./VGroups";

export class CGroups extends CObjects {
    protected list: any[];

    get baseList(): any[] {return this.list}

    protected get caption(): string {return '部门';}

    protected async internalLoadList(): Promise<void> {
        let ret = await this.uqs.JkMe.GetGroups.query({});
        this.list = ret.ret;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VGroups);
    }
}
