import { FA, LMR, View } from "tonva-react";
import { CUqBase } from "uq-app";

export abstract class VRoleNav<T extends CUqBase> extends View<T> {
	protected abstract get caption():string;
	protected get iconName(): string {return 'user'}
	protected get iconColor(): string {return 'text-info'}
	protected get icon():JSX.Element {
		return <FA name={this.iconName} 
				size="lg" 
				className={'mr-3 ' + this.iconColor} />
	}
	render() {
		return <LMR className="px-3 py-2 w-100 cursor-pointer align-items-center"
			left={this.icon}
			onClick={()=>this.controller.start()}>
			{this.caption}
		</LMR>
	}
}