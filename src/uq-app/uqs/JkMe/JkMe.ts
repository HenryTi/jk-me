//=== UqApp builder created on Fri Aug 27 2021 00:04:33 GMT-0400 (北美东部夏令时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqQuery, UqID, UqIDX, UqIX } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/me ========
//===============================

export enum Item {
	order_deliver = 1010,
	order_return = 1020,
	order_receive = 1030,
	order_profit_commission = 1040,
	order_amount_commission = 1050,
	order_customer_point = 2010
}

export enum Post {
	staff = 1010,
	staff_sales = 1100,
	manager = 2010,
	client = 7010,
	client_sales = 7100,
	customer = 8010
}

export interface Tuid$sheet {
	id?: number;
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface Tuid$user {
	id?: number;
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface Staff {
	id?: number;
	no?: string;
	name: string;
	user: number;
}

export interface Team {
	id?: number;
	name: string;
}

export interface ItemHistory {
	id?: number;
	track: number;
	item: any;
	value: number;
}

export interface OrderDetail {
	id?: number;
	main?: number;
	item: number;
	product: number;
	quantity: number;
	amount: number;
	price: number;
}

export interface OrderMain {
	id?: number;
	no?: string;
	webUser: number;
	customer: number;
	currency: number;
	sumAmount: number;
}

export interface PersonSales {
	id?: number;
	sales: number;
}

export interface PersonPostItem {
	id?: number;
	person: number;
	post: any;
	item: any;
}

export interface PersonUser {
	id?: number;
	user: number;
}

export interface PersonCustomer {
	id?: number;
	customer: number;
}

export interface Person {
	id?: number;
}

export interface DxOrderDetail {
	id: number;
	deliverDone?: number;
	receiveDone?: number;
	return?: number;
	costPrice?: number;
	$act?: number;
}

export interface DxOrderMain {
	id: number;
	costPriceSet?: number;
	$act?: number;
}

export interface DxPostItem {
	id: number;
	value?: number;
	$act?: number;
}

export interface DxPendingOrderBound {
	id: number;
	$act?: number;
}

export interface ActParamDxOrderDetail {
	id: number|IDXValue;
	deliverDone?: number|IDXValue;
	receiveDone?: number|IDXValue;
	return?: number|IDXValue;
	costPrice?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxOrderMain {
	id: number|IDXValue;
	costPriceSet?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxPostItem {
	id: number|IDXValue;
	value?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxPendingOrderBound {
	id: number|IDXValue;
	$act?: number;
}

export interface TeamStaff {
	ix: number;
	xi: number;
}

export interface PostItemHistory {
	ix: number;
	xi: number;
	value: number;
}

export interface PostItem {
	ix: number;
	xi: number;
	ratio: number;
}

export interface PersonPost {
	ix: number;
	xi: number;
}

export interface IxPendingOrderBoundTo {
	ixx: number;
	ix: number;
	xi: number;
}

export interface ParamActs {
	staff?: Staff[];
	team?: Team[];
	itemHistory?: ItemHistory[];
	orderDetail?: OrderDetail[];
	orderMain?: OrderMain[];
	personSales?: PersonSales[];
	personPostItem?: PersonPostItem[];
	personUser?: PersonUser[];
	personCustomer?: PersonCustomer[];
	person?: Person[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	dxPostItem?: ActParamDxPostItem[];
	dxPendingOrderBound?: ActParamDxPendingOrderBound[];
	teamStaff?: TeamStaff[];
	postItemHistory?: PostItemHistory[];
	postItem?: PostItem[];
	personPost?: PersonPost[];
	ixPendingOrderBoundTo?: IxPendingOrderBoundTo[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	$poked: UqQuery<Param$poked, Result$poked>;
	Staff: UqID<any>;
	Team: UqID<any>;
	ItemHistory: UqID<any>;
	OrderDetail: UqID<any>;
	OrderMain: UqID<any>;
	PersonSales: UqID<any>;
	PersonPostItem: UqID<any>;
	PersonUser: UqID<any>;
	PersonCustomer: UqID<any>;
	Person: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	DxPostItem: UqIDX<any>;
	DxPendingOrderBound: UqIDX<any>;
	TeamStaff: UqIX<any>;
	PostItemHistory: UqIX<any>;
	PostItem: UqIX<any>;
	PersonPost: UqIX<any>;
	IxPendingOrderBoundTo: UqIX<any>;
}
