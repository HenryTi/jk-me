import { VPage } from "tonwa";
import { CMe } from "./CMe";
import { renderUserText } from "./renderUser";

export class VAdminSetting extends VPage<CMe> {
    header() { return '业务设置' }
    content() {
        let { admins, web } = this.controller;
        return <div>
            <div className="small text-muted d-flex align-items-center m-3">
                <small className="d-inline">管理员</small>
                <span className="d-inline ms-3 text-danger">[我]</span>
                {admins.map(v => {
                    return <span className="d-inline ms-3">{renderUserText(web, v.id)}</span>
                })}
            </div>
        </div>;
    }

}
