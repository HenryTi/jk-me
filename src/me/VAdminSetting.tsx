import { VPage } from "tonva-react";
import { CMe } from "./CMe";

export class VAdminSetting extends VPage<CMe> {
    header() {return '业务设置'}
    content() {
        let {admins} = this.controller;
        return <div>
            <div className="small text-muted d-flex align-items-center m-3">
                <small className="d-inline">管理员</small>
                <span className="d-inline ms-3 text-danger">[我]</span>
                {admins.map(v => {
                    return <span className="d-inline ms-3">{this.renderUserText(v.id)}</span>
                })}
            </div>
        </div>;
    }
}
