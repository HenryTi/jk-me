//=== UqApp builder created on Mon Sep 06 2021 22:28:09 GMT-0400 (北美东部夏令时间) ===//
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

export enum EnumUserObjectRelation {
	self = 0,
	other = 1,
	group = 2
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
	object: number;
	post: any;
	item: any;
	sumValue: number;
}
export interface ResultUserItemPeriodSum {
	ret: ReturnUserItemPeriodSumRet[];
}

export interface ParamUserItemHistory {
	objectPostItem: number;
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

export interface ParamGetPostTitles {
}
export interface ReturnGetPostTitlesRet {
	id: number;
	title: string;
	vice: string;
}
export interface ResultGetPostTitles {
	ret: ReturnGetPostTitlesRet[];
}

export interface ParamGetItemTitles {
}
export interface ReturnGetItemTitlesRet {
	id: number;
	title: string;
	vice: string;
	unit: string;
	fixed: number;
}
export interface ResultGetItemTitles {
	ret: ReturnGetItemTitlesRet[];
}

export interface ParamUserObjectPostItem {
}
export interface ReturnUserObjectPostItemRet {
	id: number;
	object: number;
	post: any;
	item: any;
}
export interface ResultUserObjectPostItem {
	ret: ReturnUserObjectPostItemRet[];
}

export interface ParamGetUserSuperviseItem {
}
export interface ReturnGetUserSuperviseItemRet {
	item: any;
}
export interface ResultGetUserSuperviseItem {
	ret: ReturnGetUserSuperviseItemRet[];
}

export interface ParamGetUserSuperviseObject {
}
export interface ReturnGetUserSuperviseObjectRet {
	object: number;
	relation: any;
}
export interface ResultGetUserSuperviseObject {
	ret: ReturnGetUserSuperviseObjectRet[];
}

export interface ParamGetItemSumMonths {
	item: any;
	date: any;
	months: number;
}
export interface ReturnGetItemSumMonthsRet {
	date: any;
	value: number;
}
export interface ResultGetItemSumMonths {
	ret: ReturnGetItemSumMonthsRet[];
}

export interface ParamGetItemSumDays {
	item: any;
	date: any;
	days: number;
}
export interface ReturnGetItemSumDaysRet {
	date: any;
	value: number;
}
export interface ResultGetItemSumDays {
	ret: ReturnGetItemSumDaysRet[];
}

export interface Object {
	id?: number;
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

export interface ItemTitle {
	id?: number;
	title: string;
	vice: string;
	unit: string;
	fixed: number;
}

export interface PostTitle {
	id?: number;
	title: string;
	vice: string;
}

export interface ObjectUser {
	id?: number;
	user: number;
}

export interface ObjectStaff {
	id?: number;
	staff: number;
}

export interface ObjectPost {
	id?: number;
	post: any;
}

export interface ObjectCustomer {
	id?: number;
	customer: number;
}

export interface ObjectPostItem {
	id?: number;
	object: number;
	post: any;
	item: any;
}

export interface Group {
	id?: number;
	name: string;
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

export interface UserObject {
	ix: number;
	xi: number;
	relation: any;
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

export interface GroupObject {
	ix: number;
	xi: number;
}

export interface UserSuperviseItem {
	ix: number;
	xi: number;
	timeZone: number;
}

export interface ParamActs {
	object?: Object[];
	itemHistory?: ItemHistory[];
	orderDetail?: OrderDetail[];
	orderMain?: OrderMain[];
	itemTitle?: ItemTitle[];
	postTitle?: PostTitle[];
	objectUser?: ObjectUser[];
	objectStaff?: ObjectStaff[];
	objectPost?: ObjectPost[];
	objectCustomer?: ObjectCustomer[];
	objectPostItem?: ObjectPostItem[];
	group?: Group[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	userTimezone?: ActParamUserTimezone[];
	userObject?: UserObject[];
	postItemHistory?: PostItemHistory[];
	postItem?: PostItem[];
	ixPendingOrderAction?: IxPendingOrderAction[];
	ixOrderBoundTo?: IxOrderBoundTo[];
	ixPendingOrderItem?: IxPendingOrderItem[];
	groupObject?: GroupObject[];
	userSuperviseItem?: UserSuperviseItem[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	BusTest: UqAction<ParamBusTest, ResultBusTest>;
	ActOrder: UqAction<ParamActOrder, ResultActOrder>;
	$poked: UqQuery<Param$poked, Result$poked>;
	UserItemPeriodSum: UqQuery<ParamUserItemPeriodSum, ResultUserItemPeriodSum>;
	UserItemHistory: UqQuery<ParamUserItemHistory, ResultUserItemHistory>;
	GetPostTitles: UqQuery<ParamGetPostTitles, ResultGetPostTitles>;
	GetItemTitles: UqQuery<ParamGetItemTitles, ResultGetItemTitles>;
	UserObjectPostItem: UqQuery<ParamUserObjectPostItem, ResultUserObjectPostItem>;
	GetUserSuperviseItem: UqQuery<ParamGetUserSuperviseItem, ResultGetUserSuperviseItem>;
	GetUserSuperviseObject: UqQuery<ParamGetUserSuperviseObject, ResultGetUserSuperviseObject>;
	GetItemSumMonths: UqQuery<ParamGetItemSumMonths, ResultGetItemSumMonths>;
	GetItemSumDays: UqQuery<ParamGetItemSumDays, ResultGetItemSumDays>;
	Object: UqID<any>;
	ItemHistory: UqID<any>;
	OrderDetail: UqID<any>;
	OrderMain: UqID<any>;
	ItemTitle: UqID<any>;
	PostTitle: UqID<any>;
	ObjectUser: UqID<any>;
	ObjectStaff: UqID<any>;
	ObjectPost: UqID<any>;
	ObjectCustomer: UqID<any>;
	ObjectPostItem: UqID<any>;
	Group: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	UserTimezone: UqIDX<any>;
	UserObject: UqIX<any>;
	PostItemHistory: UqIX<any>;
	PostItem: UqIX<any>;
	IxPendingOrderAction: UqIX<any>;
	IxOrderBoundTo: UqIX<any>;
	IxPendingOrderItem: UqIX<any>;
	GroupObject: UqIX<any>;
	UserSuperviseItem: UqIX<any>;
}

export function assign(uq: any, to:string, from:any): void {
	Object.assign((uq as any)[to], from);
}
