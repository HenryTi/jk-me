import { VPage } from "tonva-react";
import { CObjectPortal } from "./CObjectPortal";

export class VObjectPortal extends VPage<CObjectPortal> {
    header() { return '详情'; }
    content() {
        return <div>
            <div>{this.controller.pageTop}</div>
            <div>{this.controller.renderVPortal()}</div>
        </div>;
    }
}
