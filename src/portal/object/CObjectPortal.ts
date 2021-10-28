import { env } from "tonva-react";
import { ResultGetUserObjectItemPeriodSum } from "uq-app/uqs/JkMe";
import { EnumPeriod } from "../period";
import { CPortal } from '../CPortal';
import { VObjectPortal } from "./VObjectPortal";

export class CObjectPortal extends CPortal {
    object: number;
    pageTop: JSX.Element;

    init(object: number, pageTop: JSX.Element) {
        this.object = object;
        this.pageTop = pageTop;
    }

    protected async GetPeriodSum(from: Date, to: Date):Promise<ResultGetUserObjectItemPeriodSum> {
        let ret = await this.uqs.JkMe.GetObjectItemPeriodSum.query({
            object: this.object,
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
