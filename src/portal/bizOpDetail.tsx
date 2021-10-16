import { UQs } from "uq-app";
import { ReturnUserItemHistoryRet } from "uq-app/uqs/JkMe";

export class BizOpDetail {
    private uqs: UQs;
    item: ReturnUserItemHistoryRet;

    constructor(uqs: UQs, item: ReturnUserItemHistoryRet) {
        this.uqs = uqs;
        this.item = item;
    }
}