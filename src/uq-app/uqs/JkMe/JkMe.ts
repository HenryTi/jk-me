//=== UqApp builder created on Fri Oct 22 2021 10:13:35 GMT-0400 (北美东部夏令时间) ===//
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
	profitFee = 1110,
	couponFee = 1111,
	amountFee = 1120,
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

export enum EnumUserObjectRelation {
	self = 0,
	other = 1,
	group = 2
}

export enum ReadyStates {
	costNone = 1,
	cost = 2
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

export enum EnumRole {
	all = 1,
	dev = 2
}

export enum EnumRoleOp {
	test = 1
}

export enum EnumObjectType {
	none = 0,
	user = 1,
	customer = 2,
	staff = 3,
	agent = 4,
	distributor = 5,
	post = 6
}

export enum EnumAccount {
	commission = 10
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

export interface ParamGetProductSumByMonth {
	item: any;
	month: number;
	count: number;
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
	count: number;
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

export interface ParamGetRoleOps {
}
export interface ReturnGetRoleOpsRet {
	role: any;
	op: any;
}
export interface ResultGetRoleOps {
	ret: ReturnGetRoleOpsRet[];
}

export interface ParamGetObjects {
}
export interface ReturnGetObjectsRet {
	id: number;
	type: any;
}
export interface ResultGetObjects {
	ret: ReturnGetObjectsRet[];
}

export interface ParamGetGroupObjects {
	group: number;
}
export interface ReturnGetGroupObjectsRet {
	id: number;
	type: any;
}
export interface ResultGetGroupObjects {
	ret: ReturnGetGroupObjectsRet[];
}

export interface ParamGetGroups {
}
export interface ReturnGetGroupsRet {
	id: number;
	name: string;
}
export interface ResultGetGroups {
	ret: ReturnGetGroupsRet[];
}

export interface ParamGetPosts {
	timeZone: number;
}
export interface ReturnGetPostsRet {
	opi: number;
	obj: number;
	post: any;
	item: any;
	amountThisMonth: number;
	amountLastMonth: number;
}
export interface ResultGetPosts {
	ret: ReturnGetPostsRet[];
}

export interface ParamGetDistributors {
}
export interface ReturnGetDistributorsRet {
	id: number;
	distributor: number;
}
export interface ResultGetDistributors {
	ret: ReturnGetDistributorsRet[];
}

export interface ParamGetStaffs {
	timeZone: number;
}
export interface ReturnGetStaffsRet {
	opi: number;
	item: any;
	obj: number;
	staff: number;
	valueThisMonth: number;
	valueLastMonth: number;
}
export interface ResultGetStaffs {
	ret: ReturnGetStaffsRet[];
}

export interface ParamGetAgents {
}
export interface ReturnGetAgentsRet {
	id: number;
	agent: number;
}
export interface ResultGetAgents {
	ret: ReturnGetAgentsRet[];
}

export interface ParamGetObjectItemPeriodHistory {
	objectPostItem: number;
	from: any;
	to: any;
	period: number;
	timeZone: number;
}
export interface ReturnGetObjectItemPeriodHistoryRet {
	date: any;
	value: number;
}
export interface ResultGetObjectItemPeriodHistory {
	ret: ReturnGetObjectItemPeriodHistoryRet[];
}

export interface ParamGetObjectPostItem {
	object: number;
}
export interface ReturnGetObjectPostItemRet {
	id: number;
	object: number;
	post: any;
	item: any;
}
export interface ResultGetObjectPostItem {
	ret: ReturnGetObjectPostItemRet[];
}

export interface ParamGetObjectItemHistory {
	objectPostItem: number;
	from: any;
	to: any;
	timeZone: number;
}
export interface ReturnGetObjectItemHistoryRet {
	minuteId: number;
	biz: number;
	bizOp: number;
	value: number;
	memo: string;
}
export interface ResultGetObjectItemHistory {
	ret: ReturnGetObjectItemHistoryRet[];
}

export interface ParamGetObjectItemPeriodSum {
	object: number;
	from: any;
	to: any;
	timeZone: number;
}
export interface ReturnGetObjectItemPeriodSumRet {
	id: number;
	object: number;
	post: any;
	item: any;
	value: number;
}
export interface ResultGetObjectItemPeriodSum {
	ret: ReturnGetObjectItemPeriodSumRet[];
}

export interface ParamGetUserObjectItemPeriodSum {
	from: any;
	to: any;
	timeZone: number;
}
export interface ReturnGetUserObjectItemPeriodSumRet {
	id: number;
	object: number;
	post: any;
	item: any;
	value: number;
}
export interface ResultGetUserObjectItemPeriodSum {
	ret: ReturnGetUserObjectItemPeriodSumRet[];
}

export interface Object {
	id?: number;
	type: any;
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

export interface PostBound {
	id?: number;
	action: any;
	post: any;
	postItem: any;
	item: any;
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
}

export interface Role {
	id?: number;
	name: string;
	discription: string;
}

export interface OPIHistory {
	id?: number;
	opi: number;
	itemHistory: number;
	bizOp: number;
	value: number;
	booking: number;
}

export interface ObjectAccount {
	id?: number;
	object: number;
	account: any;
	balance: number;
}

export interface ObjectAccountHistory {
	id?: number;
	objectAccount: number;
	value: number;
	opi: number;
	historyFrom: number;
	historyTo: number;
}

export interface BizMainBound {
	id?: number;
	bizMain: number;
	post: any;
	item: any;
	to: number;
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

export interface GroupObject {
	ix: number;
	xi: number;
}

export interface UserSuperviseItem {
	ix: number;
	xi: number;
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

export interface IxBizOpBound {
	ix: number;
	xi: number;
	bound: number;
}

export interface IxBizMainBoundTo {
	ixx: number;
	ix: number;
	xi: number;
}

export interface UserRole {
	ix: number;
	xi: number;
}

export interface RoleOps {
	ix: number;
	xi: number;
}

export interface PostItemHistory1 {
	ixx: number;
	ix: number;
	xi: number;
	value: number;
	memo: number;
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
	postBound?: PostBound[];
	queueBizOp?: QueueBizOp[];
	queueBizMain?: QueueBizMain[];
	deliverDetail?: DeliverDetail[];
	deliverMain?: DeliverMain[];
	role?: Role[];
	oPIHistory?: OPIHistory[];
	objectAccount?: ObjectAccount[];
	objectAccountHistory?: ObjectAccountHistory[];
	bizMainBound?: BizMainBound[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	userTimezone?: ActParamUserTimezone[];
	dxBizMain?: ActParamDxBizMain[];
	dxBizOp?: ActParamDxBizOp[];
	dxBiz?: ActParamDxBiz[];
	userObject?: UserObject[];
	groupObject?: GroupObject[];
	userSuperviseItem?: UserSuperviseItem[];
	monthSumProduct?: MonthSumProduct[];
	monthSumCustomer?: MonthSumCustomer[];
	ixBizOpBound?: IxBizOpBound[];
	ixBizMainBoundTo?: IxBizMainBoundTo[];
	userRole?: UserRole[];
	roleOps?: RoleOps[];
	postItemHistory1?: PostItemHistory1[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	BusTestBoundStaffSales: UqAction<ParamBusTestBoundStaffSales, ResultBusTestBoundStaffSales>;
	BusTestOrderSaleCost: UqAction<ParamBusTestOrderSaleCost, ResultBusTestOrderSaleCost>;
	CalcMonthSum: UqAction<ParamCalcMonthSum, ResultCalcMonthSum>;
	ExecQueueBizOp: UqAction<ParamExecQueueBizOp, ResultExecQueueBizOp>;
	ExecQueueBizMain: UqAction<ParamExecQueueBizMain, ResultExecQueueBizMain>;
	DoneDeliver: UqAction<ParamDoneDeliver, ResultDoneDeliver>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetPostTitles: UqQuery<ParamGetPostTitles, ResultGetPostTitles>;
	GetItemTitles: UqQuery<ParamGetItemTitles, ResultGetItemTitles>;
	UserObjectPostItem: UqQuery<ParamUserObjectPostItem, ResultUserObjectPostItem>;
	GetUserSuperviseItem: UqQuery<ParamGetUserSuperviseItem, ResultGetUserSuperviseItem>;
	GetUserSuperviseObject: UqQuery<ParamGetUserSuperviseObject, ResultGetUserSuperviseObject>;
	GetItemSumMonths: UqQuery<ParamGetItemSumMonths, ResultGetItemSumMonths>;
	GetItemSumDays: UqQuery<ParamGetItemSumDays, ResultGetItemSumDays>;
	GetItemHistory: UqQuery<ParamGetItemHistory, ResultGetItemHistory>;
	GetProductSumByMonth: UqQuery<ParamGetProductSumByMonth, ResultGetProductSumByMonth>;
	GetMonthSumProduct: UqQuery<ParamGetMonthSumProduct, ResultGetMonthSumProduct>;
	GetMonthSumCustomer: UqQuery<ParamGetMonthSumCustomer, ResultGetMonthSumCustomer>;
	GetCustomerSumByMonth: UqQuery<ParamGetCustomerSumByMonth, ResultGetCustomerSumByMonth>;
	GetRoleOps: UqQuery<ParamGetRoleOps, ResultGetRoleOps>;
	GetObjects: UqQuery<ParamGetObjects, ResultGetObjects>;
	GetGroupObjects: UqQuery<ParamGetGroupObjects, ResultGetGroupObjects>;
	GetGroups: UqQuery<ParamGetGroups, ResultGetGroups>;
	GetPosts: UqQuery<ParamGetPosts, ResultGetPosts>;
	GetDistributors: UqQuery<ParamGetDistributors, ResultGetDistributors>;
	GetStaffs: UqQuery<ParamGetStaffs, ResultGetStaffs>;
	GetAgents: UqQuery<ParamGetAgents, ResultGetAgents>;
	GetObjectItemPeriodHistory: UqQuery<ParamGetObjectItemPeriodHistory, ResultGetObjectItemPeriodHistory>;
	GetObjectPostItem: UqQuery<ParamGetObjectPostItem, ResultGetObjectPostItem>;
	GetObjectItemHistory: UqQuery<ParamGetObjectItemHistory, ResultGetObjectItemHistory>;
	GetObjectItemPeriodSum: UqQuery<ParamGetObjectItemPeriodSum, ResultGetObjectItemPeriodSum>;
	GetUserObjectItemPeriodSum: UqQuery<ParamGetUserObjectItemPeriodSum, ResultGetUserObjectItemPeriodSum>;
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
	PostBound: UqID<any>;
	QueueBizOp: UqID<any>;
	QueueBizMain: UqID<any>;
	DeliverDetail: UqID<any>;
	DeliverMain: UqID<any>;
	Role: UqID<any>;
	OPIHistory: UqID<any>;
	ObjectAccount: UqID<any>;
	ObjectAccountHistory: UqID<any>;
	BizMainBound: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	UserTimezone: UqIDX<any>;
	DxBizMain: UqIDX<any>;
	DxBizOp: UqIDX<any>;
	DxBiz: UqIDX<any>;
	UserObject: UqIX<any>;
	GroupObject: UqIX<any>;
	UserSuperviseItem: UqIX<any>;
	MonthSumProduct: UqIX<any>;
	MonthSumCustomer: UqIX<any>;
	IxBizOpBound: UqIX<any>;
	IxBizMainBoundTo: UqIX<any>;
	UserRole: UqIX<any>;
	RoleOps: UqIX<any>;
	PostItemHistory1: UqIX<any>;
}

export function assign(uq: any, to:string, from:any): void {
	let hasEntity = uq.$.hasEntity(to);
	if (hasEntity === false) {
		return;
	}
	Object.assign((uq as any)[to], from);
}
