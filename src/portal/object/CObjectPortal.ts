import { ResultGetUserObjectItemPeriodSum } from "uq-app/uqs/JkMe";
import { EnumPeriod } from "../period";
import { CPortal } from '../CPortal';
import { VObjectPortal } from "./VObjectPortal";
import { CAccount } from "account";

export class CObjectPortal extends CPortal {
	cAccount: CAccount;
    object: number;
    pageTop: JSX.Element;

    init(object: number, pageTop: JSX.Element) {
        this.cAccount = this.newC(CAccount);
        this.object = object;
        this.pageTop = pageTop;
    }

    protected async GetPeriodSum(from: Date, to: Date):Promise<ResultGetUserObjectItemPeriodSum> {
        let ret = await this.uqs.JkMe.GetObjectItemPeriodSum.query({
            object: this.object,
			from,
			to,
		});
        return ret;
    }

    async showObjectPortal() {
        await Promise.all([
            this.setPeriod(EnumPeriod.month),
            this.cAccount.load(this.object),
        ]);
        this.openVPage(VObjectPortal);
    }
}
