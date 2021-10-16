import { env } from "tonva-react";
import { ResultGetUserObjectItemPeriodSum } from "uq-app/uqs/JkMe";
import { EnumPeriod } from "./period";
import { CPortal } from './CPortal';
import { VObjectPortal } from "./VObjectPortal";

export class CObjectPortal extends CPortal {
    objectPostItemId: number;
    pageTop: JSX.Element;

    init(objectPostItemId: number, pageTop: JSX.Element) {
        this.objectPostItemId = objectPostItemId;
        this.pageTop = pageTop;
    }

    protected async GetObjectItemPeriodSum(from: Date, to: Date):Promise<ResultGetUserObjectItemPeriodSum> {
        let ret = await this.uqs.JkMe.GetObjectItemPeriodSum.query({
            objectPostItem: this.objectPostItemId,
			from,
			to,
            timeZone: env.timeZone,
		});
        return ret;
    }

    async showObjectPortal() {
        await this.setPeriod(EnumPeriod.month);
        // await this.load();
        this.openVPage(VObjectPortal);
    }
}
