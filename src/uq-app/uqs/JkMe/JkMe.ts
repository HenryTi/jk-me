//=== UqApp builder created on Tue Oct 12 2021 22:17:18 GMT-0400 (北美东部夏令时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID, UqIDX, UqIX } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/me ========
//===============================

export enum Item {
	orderDeliver = 1010,
	orderAmount = 1011,
	orderProfit = 1012,
	orderReturn = 1020,
	orderReceive = 1030,
	orderReceiveReturn = 1040,
	commissionFromProfit = 1110,
	commissionFromAmount = 1120,
	customerPoint = 2010
}

export enum Post {
	none = 0,
	staff = 1010,
	staffSales = 1100,
	manager = 2010,
	managerIT = 2100,
	agent = 7010,
	agentSales = 7100,
	distributor = 7500,
	distributorSales = 7501,
	customer = 8010
}

export enum EnumOrderAction {
	none = 0,
	deliverDone = 1,
	receiveDone = 2,
	return = 3,
	orderMain = 1000,
	orderAccept = 1001,
	orderCost = 1002,
	orderBoundStaffSales = 1101,
	orderBoundAgent = 1102,
	orderBoundDistributor = 1103,
	orderBoundCustomer = 1104,
	orderBoundManagerIT = 1120
}

export enum EnumUserObjectRelation {
	self = 0,
	other = 1,
	group = 2
}

export enum ReadyStates {
	costNone = 1,
	cost = 2
}

export enum EnumDone {
	withCost = 1,
	withoutCost = 2
}

export enum EnumBizAction {
	none = 0,
	orderDeliverDone = 101,
	orderReceiveDone = 102,
	orderReturn = 103
}

export enum OrderReady {
	sheet = 1,
	cost = 2
}

export enum EnumBoundAction {
	orderBound = 100,
	orderStaffSales = 101,
	orderAgent = 102,
	orderDistributor = 103,
	orderCustomer = 104,
	orderManagerIT = 120,
	orderBoundMax = 199
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

export interface ParamActOrderAction {
}
export interface ResultActOrderAction {
}

export interface ParamBusTestBoundStaffSales {
	orderMain: number;
}
export interface ResultBusTestBoundStaffSales {
}

export interface ParamBusTestOrderSaleCost {
	order: number;
	detail: {
		orderDetail: number;
		cost: number;
	}[];

}
export interface ResultBusTestOrderSaleCost {
}

export interface ParamCalcMonthSum {
}
export interface ResultCalcMonthSum {
}

export interface ParamExecQueueBizOp {
}
export interface ResultExecQueueBizOp {
}

export interface ParamExecQueueBizMain {
}
export interface ResultExecQueueBizMain {
}

export interface ParamDoneDeliver {
	customer: number;
	contact: number;
	warehouse: number;
	detail: {
		orderDetail: number;
		quantity: number;
	}[];

}
export interface ResultDoneDeliver {
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
	timeZone: number;
}
export interface ReturnUserItemPeriodSumRet {
	id: number;
	object: number;
	post: any;
	item: any;
	value: number;
}
export interface ResultUserItemPeriodSum {
	ret: ReturnUserItemPeriodSumRet[];
}

export interface ParamUserItemHistory {
	objectPostItem: number;
	from: any;
	to: any;
	timeZone: number;
}
export interface ReturnUserItemHistoryRet {
	minuteId: number;
	biz: number;
	bizOp: number;
	value: number;
	memo: string;
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
	timeZone: number;
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
	timeZone: number;
}
export interface ReturnGetItemSumDaysRet {
	date: any;
	value: number;
}
export interface ResultGetItemSumDays {
	ret: ReturnGetItemSumDaysRet[];
}

export interface ParamGetItemHistory {
	item: any;
	from: any;
	to: any;
	timeZone: number;
}
export interface ReturnGetItemHistory$page {
	id: number;
	biz: number;
	bizOp: number;
	item: any;
	value: number;
	memo: string;
}
export interface ResultGetItemHistory {
	$page: ReturnGetItemHistory$page[];
}

export interface ParamUserItemPeriodHistory {
	objectPostItem: number;
	from: any;
	to: any;
	period: number;
	timeZone: number;
}
export interface ReturnUserItemPeriodHistoryRet {
	date: any;
	value: number;
}
export interface ResultUserItemPeriodHistory {
	ret: ReturnUserItemPeriodHistoryRet[];
}

export interface ParamGetProductSumByMonth {
	item: any;
	month: number;
}
export interface ReturnGetProductSumByMonthRet {
	id: number;
	value: number;
	amount: number;
	profit: number;
	receive: number;
	return: number;
}
export interface ResultGetProductSumByMonth {
	ret: ReturnGetProductSumByMonthRet[];
}

export interface ParamGetMonthSumProduct {
	item: any;
	id: number;
}
export interface ReturnGetMonthSumProduct$page {
	month: number;
	value: number;
	amount: number;
	profit: number;
	receive: number;
	return: number;
}
export interface ResultGetMonthSumProduct {
	$page: ReturnGetMonthSumProduct$page[];
}

export interface ParamGetMonthSumCustomer {
	item: any;
	id: number;
}
export interface ReturnGetMonthSumCustomer$page {
	month: number;
	value: number;
	amount: number;
	profit: number;
	receive: number;
	return: number;
}
export interface ResultGetMonthSumCustomer {
	$page: ReturnGetMonthSumCustomer$page[];
}

export interface ParamGetCustomerSumByMonth {
	item: any;
	month: number;
}
export interface ReturnGetCustomerSumByMonthRet {
	id: number;
	value: number;
	amount: number;
	profit: number;
	receive: number;
	return: number;
}
export interface ResultGetCustomerSumByMonth {
	ret: ReturnGetCustomerSumByMonthRet[];
}

export interface Object {
	id?: number;
}

export interface ItemHistory {
	id?: number;
	biz: number;
	item: any;
	bizOp: number;
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
	customerAccount: number;
	currency: number;
	sumAmount: number;
	$create?: any;
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

export interface ObjectDistributor {
	id?: number;
	distributor: number;
}

export interface ObjectAgent {
	id?: number;
	agent: number;
}

export interface OrderAction {
	id?: number;
	actionId: number;
	action: any;
	orderDetail: number;
	value: number;
	item: any;
}

export interface ItemReadyStates {
	id?: number;
	readyStates: any;
}

export interface PostBound {
	id?: number;
	action: any;
	post: any;
	item: any;
	itemToObj: any;
	ratio: number;
	memo: number;
}

export interface QueueBizOp {
	id?: number;
	bizOp: number;
}

export interface QueueBizMain {
	id?: number;
	bizMain: number;
}

export interface DeliverDetail {
	id?: number;
	main?: number;
	orderDetail: number;
	quantity: number;
}

export interface DeliverMain {
	id?: number;
	no?: string;
	customer: number;
	contact: number;
	warehouse: number;
	cutOffMain: number;
	trayNumber: number;
	$create?: any;
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
	readyStates?: any;
	$act?: number;
}

export interface UserTimezone {
	id: number;
	timeZone?: number;
	$act?: number;
}

export interface DxOrderAction {
	id: number;
	orderMain?: number;
	orderDetail?: number;
	done?: any;
	$act?: number;
}

export interface DxBizMain {
	id: number;
	ready?: number;
	$act?: number;
}

export interface DxBizOp {
	id: number;
	action?: any;
	biz?: number;
	value?: number;
	done?: number;
	$act?: number;
}

export interface DxBiz {
	id: number;
	main?: number;
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
	readyStates?: any|IDXValue;
	$act?: number;
}

export interface ActParamUserTimezone {
	id: number|IDXValue;
	timeZone?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxOrderAction {
	id: number|IDXValue;
	orderMain?: number|IDXValue;
	orderDetail?: number|IDXValue;
	done?: any|IDXValue;
	$act?: number;
}

export interface ActParamDxBizMain {
	id: number|IDXValue;
	ready?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxBizOp {
	id: number|IDXValue;
	action?: any|IDXValue;
	biz?: number|IDXValue;
	value?: number|IDXValue;
	done?: number|IDXValue;
	$act?: number;
}

export interface ActParamDxBiz {
	id: number|IDXValue;
	main?: number|IDXValue;
	$act?: number;
}

export interface UserObject {
	ix: number;
	xi: number;
	relation: any;
}

export interface PostItemHistory {
	ixx: number;
	ix: number;
	xi: number;
	value: number;
	memo: number;
}

export interface IxOrderBoundTo {
	ixx: number;
	ix: number;
	xi: number;
}

export interface GroupObject {
	ix: number;
	xi: number;
}

export interface UserSuperviseItem {
	ix: number;
	xi: number;
}

export interface IxOrderActionBoundPostDone {
	ix: number;
	xi: number;
	done: any;
}

export interface MonthSumProduct {
	ixx: number;
	ix: number;
	xi: number;
	value: number;
}

export interface MonthSumCustomer {
	ixx: number;
	ix: number;
	xi: number;
	value: number;
}

export interface IxActionTrack {
	ixx: number;
	ix: number;
	xi: number;
	stamp: any;
}

export interface IxBizOpBound {
	ixx: number;
	ix: number;
	xi: number;
	bound: number;
}

export interface IxBizMainBoundTo {
	ixx: number;
	ix: number;
	xi: number;
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
	objectDistributor?: ObjectDistributor[];
	objectAgent?: ObjectAgent[];
	orderAction?: OrderAction[];
	itemReadyStates?: ItemReadyStates[];
	postBound?: PostBound[];
	queueBizOp?: QueueBizOp[];
	queueBizMain?: QueueBizMain[];
	deliverDetail?: DeliverDetail[];
	deliverMain?: DeliverMain[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	userTimezone?: ActParamUserTimezone[];
	dxOrderAction?: ActParamDxOrderAction[];
	dxBizMain?: ActParamDxBizMain[];
	dxBizOp?: ActParamDxBizOp[];
	dxBiz?: ActParamDxBiz[];
	userObject?: UserObject[];
	postItemHistory?: PostItemHistory[];
	ixOrderBoundTo?: IxOrderBoundTo[];
	groupObject?: GroupObject[];
	userSuperviseItem?: UserSuperviseItem[];
	ixOrderActionBoundPostDone?: IxOrderActionBoundPostDone[];
	monthSumProduct?: MonthSumProduct[];
	monthSumCustomer?: MonthSumCustomer[];
	ixActionTrack?: IxActionTrack[];
	ixBizOpBound?: IxBizOpBound[];
	ixBizMainBoundTo?: IxBizMainBoundTo[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	ActOrderAction: UqAction<ParamActOrderAction, ResultActOrderAction>;
	BusTestBoundStaffSales: UqAction<ParamBusTestBoundStaffSales, ResultBusTestBoundStaffSales>;
	BusTestOrderSaleCost: UqAction<ParamBusTestOrderSaleCost, ResultBusTestOrderSaleCost>;
	CalcMonthSum: UqAction<ParamCalcMonthSum, ResultCalcMonthSum>;
	ExecQueueBizOp: UqAction<ParamExecQueueBizOp, ResultExecQueueBizOp>;
	ExecQueueBizMain: UqAction<ParamExecQueueBizMain, ResultExecQueueBizMain>;
	DoneDeliver: UqAction<ParamDoneDeliver, ResultDoneDeliver>;
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
	GetItemHistory: UqQuery<ParamGetItemHistory, ResultGetItemHistory>;
	UserItemPeriodHistory: UqQuery<ParamUserItemPeriodHistory, ResultUserItemPeriodHistory>;
	GetProductSumByMonth: UqQuery<ParamGetProductSumByMonth, ResultGetProductSumByMonth>;
	GetMonthSumProduct: UqQuery<ParamGetMonthSumProduct, ResultGetMonthSumProduct>;
	GetMonthSumCustomer: UqQuery<ParamGetMonthSumCustomer, ResultGetMonthSumCustomer>;
	GetCustomerSumByMonth: UqQuery<ParamGetCustomerSumByMonth, ResultGetCustomerSumByMonth>;
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
	ObjectDistributor: UqID<any>;
	ObjectAgent: UqID<any>;
	OrderAction: UqID<any>;
	ItemReadyStates: UqID<any>;
	PostBound: UqID<any>;
	QueueBizOp: UqID<any>;
	QueueBizMain: UqID<any>;
	DeliverDetail: UqID<any>;
	DeliverMain: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	UserTimezone: UqIDX<any>;
	DxOrderAction: UqIDX<any>;
	DxBizMain: UqIDX<any>;
	DxBizOp: UqIDX<any>;
	DxBiz: UqIDX<any>;
	UserObject: UqIX<any>;
	PostItemHistory: UqIX<any>;
	IxOrderBoundTo: UqIX<any>;
	GroupObject: UqIX<any>;
	UserSuperviseItem: UqIX<any>;
	IxOrderActionBoundPostDone: UqIX<any>;
	MonthSumProduct: UqIX<any>;
	MonthSumCustomer: UqIX<any>;
	IxActionTrack: UqIX<any>;
	IxBizOpBound: UqIX<any>;
	IxBizMainBoundTo: UqIX<any>;
}

export function assign(uq: any, to:string, from:any): void {
	Object.assign((uq as any)[to], from);
}
