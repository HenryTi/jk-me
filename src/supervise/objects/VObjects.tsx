import { observer } from "mobx-react";
import React from "react";
import { List, VPage } from "tonva-react";
import { CObjects } from "./CObjects";

export abstract class VObjects<T extends CObjects> extends VPage<T> {
    header() {return this.controller.header()}
    content() {
        return React.createElement(observer(() => {
            return <div className="">
                <List items={this.controller.baseList}
                    item={{render: this.renderRow, onClick: this.onClickRow}} />
            </div>
        }));
    }

    private renderRow = (v:any, index:number): JSX.Element => {
        return this.renderItem(v, index);
    }

    private onClickRow = (v:any) => {
        this.onClickItem(v);
    }

    protected renderItem(v:any, index:number): JSX.Element {
        return <div className="px-3 py-2">
            {v.id}
        </div>;
    }

    protected onClickItem(v:any) {
        alert(v.id);
    }
}
