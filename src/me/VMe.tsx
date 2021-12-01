import { observer } from 'mobx-react';
import { Image, VPage, IconText, PropGrid, LMR, FA, Prop } from "tonwa";
import { CMe } from './CMe';
import { appConfig } from '../uq-app/appConfig';
import { VAbout } from './VAbout';
import { renderUserText } from './renderUser';
import { tonva } from 'tonwa-core';

export class VMe extends VPage<CMe> {
    header() { return this.t('me') }

    content() {
        const { user } = tonva;
        let aboutRows: Prop[] = [
            '',
            {
                type: 'component',
                component: <LMR className="w-100" onClick={this.about}
                    right={<FA className="align-self-center" name="angle-right" />}>
                    <IconText iconClass="text-info me-2"
                        icon="smile-o"
                        text={<>{this.t('aboutTheApp')} <small>版本 {appConfig.version}</small></>} />
                </LMR>,
            },
        ];

        let rows: Prop[];
        if (user === undefined) {
            rows = aboutRows;
            rows.push(
                {
                    type: 'component',
                    component: <button className="btn btn-success w-100 my-2" onClick={() => tonva.logout()}>
                        <FA name="sign-out" size="lg" /> {this.t('pleaseLogin')}
                    </button>
                },
            );
        }
        else {
            let logOutRows: Prop[] = [
            ];

            rows = [
                '',
                {
                    type: 'component',
                    component: <this.meInfo />
                },
                '',
            ];
            rows.push({
                type: 'component',
                component: this.react(this.renderAdmin),
            });
            rows.push(...aboutRows, ...logOutRows);
        }
        return <>
            <PropGrid rows={[...rows]} values={{}} />
        </>;
    }

    private renderAdmin(): JSX.Element {
        let { isAdmin } = this.controller.data;
        if (isAdmin === false) return null;
        let { admins, web } = this.controller;
        return <LMR className="py-2 cursor-pointer w-100"
            onClick={this.controller.adminSetting}
            left={<FA name="cog" className="text-info mt-1 me-3" />}
            right={<FA className="align-self-center" name="angle-right" />}
        >
            <div>业务设置</div>
            <div className="small text-muted d-flex align-items-center">
                <small className="d-inline">管理员</small>
                <span className="d-inline ms-3 text-danger">[我]</span>
                {admins.map(v => {
                    let { id } = v;
                    return <span key={id} className="d-inline ms-3">{renderUserText(web, id)}</span>
                })}
            </div>
        </LMR>;
    };

    private meInfo = observer(() => {
        let { user } = tonva;
        if (user === undefined) return null;
        let { id, name, nick, icon } = user;
        return <LMR className="py-2 cursor-pointer w-100"
            left={<Image className="w-3c h-3c me-3" src={icon || '.user-o'} />}
            right={<FA className="align-self-end" name="angle-right" />}
            onClick={this.controller.showEditMe}>
            <div>
                <div>{userSpan(name, nick)}</div>
                <div className="small"><span className="text-muted">ID:</span> {id > 10000 ? id : String(id + 10000).substr(1)}</div>
            </div>
        </LMR>;
    });

    /*
    private renderRolesAdmin = observer(() => {
        return <LMR className="py-2 cursor-pointer w-100" onClick={this.controller.roleAdmin}>
            设置用户角色
        </LMR>
    });
    */

    private about = () => {
        this.openVPage(VAbout);
    }
}

function userSpan(name: string, nick: string): JSX.Element {
    return nick ?
        <><b>{nick} &nbsp; <small className="muted">{name}</small></b></>
        : <b>{name}</b>
}
