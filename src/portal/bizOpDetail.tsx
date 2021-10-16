import { UQs } from "uq-app";
import { ReturnGetObjectItemHistoryRet } from "uq-app/uqs/JkMe";

export class BizOpDetail {
    private uqs: UQs;
    item: ReturnGetObjectItemHistoryRet;

    constructor(uqs: UQs, item: ReturnGetObjectItemHistoryRet) {
        this.uqs = uqs;
        this.item = item;
    }
}