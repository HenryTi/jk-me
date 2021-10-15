import { CObjects } from "./CObjects";
import { VPosts } from "./VPosts";

export class CPosts extends CObjects {
    protected list: any[];

    get baseList(): any[] {return this.list}

    protected get caption(): string {return '岗位'}
    header() {return this.caption + '绩效列表'}

    protected async internalLoadList(): Promise<void> {
        let ret = await this.uqs.JkMe.GetPosts.query({
            timeZone: 8,
        });
        this.list = ret.ret;
    }

    protected async showList(): Promise<void> {
        this.openVPage(VPosts);
    }
}
