//=== UqApp builder created on Wed Sep 01 2021 23:47:55 GMT-0400 (北美东部夏令时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID, UqIDX, UqIX } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/me ========
//===============================

export enum Item {
	orderDeliver = 1010,
	orderReturn = 1020,
	orderReceive = 1030,
	orderReceiveReturn = 1040,
	orderProfitCommission = 1110,
	orderAmountCommission = 1120,
	orderCustomerPoint = 2010
}

export enum Post {
	staff = 1010,
	staffSales = 1100,
	manager = 2010,
	managerIT = 2100,
	client = 7010,
	clientSales = 7100,
	customer = 8010
}

export enum EnumOrderAction {
	deliverDone = 1,
	receiveDone = 2,
	return = 3
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

export interface ParamBusTest {
	orderMain: number;
}
export interface ResultBusTest {
}

export interface ParamActOrder {
}
export interface ResultActOrder {
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamUserItemPeriodSum {
	from: any;
	to: any;
}
export interface ReturnUserItemPeriodSumRet {
	id: number;
	person: number;
	post: any;
	item: any;
	sumValue: number;
}
export interface ResultUserItemPeriodSum {
	ret: ReturnUserItemPeriodSumRet[];
}

export interface ParamUserPersonPostItem {
}
export interface ReturnUserPersonPostItemRet {
	id: number;
	person: number;
	post: any;
	item: any;
}
export interface ResultUserPersonPostItem {
	ret: ReturnUserPersonPostItemRet[];
}

export interface ParamUserItemHistory {
	personPostItem: number;
	from: any;
	to: any;
	period: number;
}
export interface ReturnUserItemHistoryRet {
	date: any;
	sumValue: number;
}
export interface ResultUserItemHistory {
	ret: ReturnUserItemHistoryRet[];
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
	memo: number;
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

export interface PersonStaff {
	id?: number;
	staff: number;
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
	flagBoundTo?: number;
	flagCostPrice?: number;
	$act?: number;
}

export interface UserTimezone {
	id: number;
	timeZone?: number;
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
	flagBoundTo?: number|IDXValue;
	flagCostPrice?: number|IDXValue;
	$act?: number;
}

export interface ActParamUserTimezone {
	id: number|IDXValue;
	timeZone?: number|IDXValue;
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

export interface IxPendingOrderAction {
	ix: number;
	xi: number;
}

export interface IxOrderBoundTo {
	ixx: number;
	ix: number;
	xi: number;
}

export interface IxPendingOrderItem {
	ix: number;
	xi: number;
	value: number;
}

export interface UserPerson {
	ix: number;
	xi: number;
}

export interface ParamActs {
	staff?: Staff[];
	team?: Team[];
	itemHistory?: ItemHistory[];
	orderDetail?: OrderDetail[];
	orderMain?: OrderMain[];
	personPostItem?: PersonPostItem[];
	personUser?: PersonUser[];
	personCustomer?: PersonCustomer[];
	person?: Person[];
	personStaff?: PersonStaff[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	userTimezone?: ActParamUserTimezone[];
	teamStaff?: TeamStaff[];
	postItemHistory?: PostItemHistory[];
	postItem?: PostItem[];
	ixPendingOrderAction?: IxPendingOrderAction[];
	ixOrderBoundTo?: IxOrderBoundTo[];
	ixPendingOrderItem?: IxPendingOrderItem[];
	userPerson?: UserPerson[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	BusTest: UqAction<ParamBusTest, ResultBusTest>;
	ActOrder: UqAction<ParamActOrder, ResultActOrder>;
	$poked: UqQuery<Param$poked, Result$poked>;
	UserItemPeriodSum: UqQuery<ParamUserItemPeriodSum, ResultUserItemPeriodSum>;
	UserPersonPostItem: UqQuery<ParamUserPersonPostItem, ResultUserPersonPostItem>;
	UserItemHistory: UqQuery<ParamUserItemHistory, ResultUserItemHistory>;
	Staff: UqID<any>;
	Team: UqID<any>;
	ItemHistory: UqID<any>;
	OrderDetail: UqID<any>;
	OrderMain: UqID<any>;
	PersonPostItem: UqID<any>;
	PersonUser: UqID<any>;
	PersonCustomer: UqID<any>;
	Person: UqID<any>;
	PersonStaff: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	UserTimezone: UqIDX<any>;
	TeamStaff: UqIX<any>;
	PostItemHistory: UqIX<any>;
	PostItem: UqIX<any>;
	IxPendingOrderAction: UqIX<any>;
	IxOrderBoundTo: UqIX<any>;
	IxPendingOrderItem: UqIX<any>;
	UserPerson: UqIX<any>;
}
