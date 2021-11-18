//import { Render } from '../../../tonva-react/ui';
//import { uqStringify } from '../uqStringify';

import { observer } from "mobx-react";
import { uqStringify } from "tonva-core";
import { Render } from "../ui";

export class Tuid {
    sName: string;
    render: Render<any>;
    useId(id:number) {        
    }
    valueFromId(id:number) {
        return;
    }

	tv(id:number, render?:Render<any>):JSX.Element {
        const TuidView = observer(() => {
			let obj = this.valueFromId(id);
			if (obj === undefined) {
				this.useId(id);
				return <>{this.sName}:{id}</>;
			}
            let r: Render<any>;
            if (render) {
                r = render;
            }
            else if (this.render) {
                r = this.render;
            }
            else {
                console.log('render', render, 'this.render', this.render);
                r = (item:any) => {
                    return <>{this.sName}:{uqStringify(item)}</>;
                };
            }
			return r(obj);
		});
		return <><TuidView /></>;
	}
}