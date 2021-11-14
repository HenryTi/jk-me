//=== UqApp builder created on Sat Nov 13 2021 19:38:53 GMT-0500 (北美东部标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID, UqIDX, UqIX } from "tonva-core";


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

export enum EnumBizOpType {
	orderDeliverDone = 101,
	orderReceiveDone = 102,
	orderReturn = 103
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
	timezone: number;
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

export interface Param$setMyTimezone {
	_timezone: number;
}
export interface Result$setMyTimezone {
}

export interface Param_BuildLostSalesStaffOrderAmount {
}
export interface Result_BuildLostSalesStaffOrderAmount {
}

export interface ParamCalcAccount {
}
export interface ResultCalcAccount {
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

export interface ParamGetItemHistory {
	item: any;
	from: any;
	to: any;
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
}
export interface ReturnGetStaffsRet {
	opi: number;
	item: any;
	obj: number;
	staff: number;
	valueToday: number;
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

export interface ParamGetItemPeriodSum {
	date: any;
	days: number;
}
export interface ReturnGetItemPeriodSumRet {
	item: any;
	value: number;
}
export interface ResultGetItemPeriodSum {
	ret: ReturnGetItemPeriodSumRet[];
}

export interface Param$getMyTimezone {
}
export interface Return$getMyTimezoneRet {
	timezone: number;
	unitTimeZone: number;
}
export interface Result$getMyTimezone {
	ret: Return$getMyTimezoneRet[];
}

export interface ParamGetUserObjectAccount {
	object: number;
}
export interface ReturnGetUserObjectAccountRet {
	objectAccount: number;
	object: number;
	post: any;
	account: any;
	balance: number;
}
export interface ResultGetUserObjectAccount {
	ret: ReturnGetUserObjectAccountRet[];
}

export interface ParamGetAccountTitles {
}
export interface ReturnGetAccountTitlesRet {
	id: number;
	title: string;
	vice: string;
	unit: string;
	fixed: number;
}
export interface ResultGetAccountTitles {
	ret: ReturnGetAccountTitlesRet[];
}

export interface ParamGetObjectAccountHistory {
	objectAccount: number;
}
export interface ReturnGetObjectAccountHistoryRet {
	date: number;
	value: number;
	post: any;
	item: any;
}
export interface ResultGetObjectAccountHistory {
	ret: ReturnGetObjectAccountHistoryRet[];
}

export interface ParamGetAccounts {
}
export interface ReturnGetAccountsRet {
	id: number;
	object: number;
	account: any;
	balance: number;
	objectType: any;
	objectTo: number;
}
export interface ResultGetAccounts {
	ret: ReturnGetAccountsRet[];
}

export interface Object {
	id?: number;
	type: any;
	to: number;
}

export interface ItemHistory {
	id?: number;
	bizOp: number;
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
	customerAccount: number;
	seller: number;
	currency: number;
	sumAmount: number;
	stamp: number;
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
	value: number;
	booking: number;
}

export interface ObjectAccount {
	id?: number;
	object: number;
	account: any;
	balance: number;
}

export interface OPIBooking {
	id?: number;
	bizOpType: any;
	post: any;
	postItem: any;
	item: any;
	ratio: number;
	memo: number;
}

export interface AccountTitle {
	id?: number;
	title: string;
	vice: string;
	unit: string;
	fixed: number;
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
	orderReady?: any;
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
	orderReady?: any|IDXValue;
	$act?: number;
}

export interface UserObject {
	ix: number;
	xi: number;
	on: number;
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

export interface UserRole {
	ix: number;
	xi: number;
}

export interface RoleOps {
	ix: number;
	xi: number;
}

export interface ObjectAccountHistory {
	ix: number;
	xi: number;
	value: number;
	opi: number;
}

export interface DaySumItem {
	ix: number;
	xi: any;
	value: number;
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
	group?: Group[];
	objectDistributor?: ObjectDistributor[];
	objectAgent?: ObjectAgent[];
	deliverDetail?: DeliverDetail[];
	deliverMain?: DeliverMain[];
	role?: Role[];
	oPIHistory?: OPIHistory[];
	objectAccount?: ObjectAccount[];
	oPIBooking?: OPIBooking[];
	accountTitle?: AccountTitle[];
	dxOrderDetail?: ActParamDxOrderDetail[];
	dxOrderMain?: ActParamDxOrderMain[];
	userObject?: UserObject[];
	groupObject?: GroupObject[];
	userSuperviseItem?: UserSuperviseItem[];
	monthSumProduct?: MonthSumProduct[];
	monthSumCustomer?: MonthSumCustomer[];
	userRole?: UserRole[];
	roleOps?: RoleOps[];
	objectAccountHistory?: ObjectAccountHistory[];
	daySumItem?: DaySumItem[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	BusTestBoundStaffSales: UqAction<ParamBusTestBoundStaffSales, ResultBusTestBoundStaffSales>;
	BusTestOrderSaleCost: UqAction<ParamBusTestOrderSaleCost, ResultBusTestOrderSaleCost>;
	CalcMonthSum: UqAction<ParamCalcMonthSum, ResultCalcMonthSum>;
	DoneDeliver: UqAction<ParamDoneDeliver, ResultDoneDeliver>;
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	_BuildLostSalesStaffOrderAmount: UqAction<Param_BuildLostSalesStaffOrderAmount, Result_BuildLostSalesStaffOrderAmount>;
	CalcAccount: UqAction<ParamCalcAccount, ResultCalcAccount>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetPostTitles: UqQuery<ParamGetPostTitles, ResultGetPostTitles>;
	GetItemTitles: UqQuery<ParamGetItemTitles, ResultGetItemTitles>;
	UserObjectPostItem: UqQuery<ParamUserObjectPostItem, ResultUserObjectPostItem>;
	GetUserSuperviseItem: UqQuery<ParamGetUserSuperviseItem, ResultGetUserSuperviseItem>;
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
	GetItemPeriodSum: UqQuery<ParamGetItemPeriodSum, ResultGetItemPeriodSum>;
	$getMyTimezone: UqQuery<Param$getMyTimezone, Result$getMyTimezone>;
	GetUserObjectAccount: UqQuery<ParamGetUserObjectAccount, ResultGetUserObjectAccount>;
	GetAccountTitles: UqQuery<ParamGetAccountTitles, ResultGetAccountTitles>;
	GetObjectAccountHistory: UqQuery<ParamGetObjectAccountHistory, ResultGetObjectAccountHistory>;
	GetAccounts: UqQuery<ParamGetAccounts, ResultGetAccounts>;
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
	Group: UqID<any>;
	ObjectDistributor: UqID<any>;
	ObjectAgent: UqID<any>;
	DeliverDetail: UqID<any>;
	DeliverMain: UqID<any>;
	Role: UqID<any>;
	OPIHistory: UqID<any>;
	ObjectAccount: UqID<any>;
	OPIBooking: UqID<any>;
	AccountTitle: UqID<any>;
	DxOrderDetail: UqIDX<any>;
	DxOrderMain: UqIDX<any>;
	UserObject: UqIX<any>;
	GroupObject: UqIX<any>;
	UserSuperviseItem: UqIX<any>;
	MonthSumProduct: UqIX<any>;
	MonthSumCustomer: UqIX<any>;
	UserRole: UqIX<any>;
	RoleOps: UqIX<any>;
	ObjectAccountHistory: UqIX<any>;
	DaySumItem: UqIX<any>;
}

export function assign(uq: any, to:string, from:any): void {
	let hasEntity = uq.$.hasEntity(to);
	if (hasEntity === false) {
		return;
	}
	Object.assign((uq as any)[to], from);
}
