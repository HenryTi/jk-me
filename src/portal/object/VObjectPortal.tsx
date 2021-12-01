import { VPage } from "tonwa";
import { CObjectPortal } from "./CObjectPortal";

export class VObjectPortal extends VPage<CObjectPortal> {
    header() { return '详情'; }
    content() {
        return <div>
            <div>{this.controller.pageTop}</div>
            <div className="d-flex flex-wrap p-2">
                {this.controller.cAccount?.renderAccounts()}
            </div>
            <div>{this.controller.renderVPortal()}</div>
        </div>;
    }
}
