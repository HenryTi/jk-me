import { Controller, FieldCustoms, ID, IDX, IX, Uq } from "tonva-react";
import { IDBase } from "tonva-uqui";

export interface UqUiProps {
	uq: Uq;
}

export interface IDBaseUiProps<T extends IDBase> extends UqUiProps {
	ID: ID;
	header?: string|JSX.Element;
	listHeader?: string|JSX.Element;
	renderRight?: () => JSX.Element;
	fieldCustoms?: FieldCustoms;
}

export interface IDListUiProps<T extends IDBase> extends IDBaseUiProps<T> {
	renderItem?: (item:T, index:number) => JSX.Element;
	onClickItem?: (item:T) => Promise<void>;
	onAddItem?: () => Promise<void>;
}

export interface IDUiProps<T extends IDBase> extends IDBaseUiProps<T> {
	onItemChanged?: (item: T) => Promise<void>;
}

export interface IDEditUiProps<T extends IDBase> extends IDUiProps<T> {
	saveItem?: (item: T) => Promise<number>;
}

export interface IDViewUiProps<T extends IDBase> extends IDUiProps<T> {
	onEditItem?: (item: T) => Promise<T>;
}

export interface IXListUiProps<TIX extends IDBase, TXI extends IDBase> extends IDListUiProps<TXI> {
	IX: IX;
	ix: TIX;		// if undefined, then current user
	renderIx?: (ix:TIX) => JSX.Element;
}

export interface IXUiProps<TIX extends IDBase, TXI extends IDBase> extends UqUiProps {
	ixProps?: IDListUiProps<TIX>;
	xiProps?: IXListUiProps<TIX, TXI>;
}

export interface XIUiProps<TXI extends IDBase, TIX extends IDBase> extends UqUiProps {
	xiProps?: IDListUiProps<TXI>;
	ixProps?: XIListUiProps<TXI, TIX>;
}

export interface XIListUiProps<TIX extends IDBase, TXI extends IDBase> extends IDListUiProps<TIX> {
	IX: IX;
	xi: TXI;		// if undefined, then current user
	renderXi?: (xi:TXI) => JSX.Element;
	onSetIXItem?: () => Promise<void>;
}

export interface IDXBaseUiProps<T extends IDBase> extends UqUiProps {
	readonly IDX: IDX;
	readonly ID: ID;
	readonly timeZone: number;
}

export interface IDXUiProps<T extends IDBase> extends IDXBaseUiProps<T> {
}

export interface IDXHistoryUiProps<T> extends IDXBaseUiProps<T> {
}

export abstract class CUqUi<P extends UqUiProps> extends Controller {
	protected uq: Uq;
	props: P;

	constructor(props: P) {
		super();
		this.uq = props.uq;
		this.props = props;
	}
}
