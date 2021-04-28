//=== UqApp builder created on Fri Apr 23 2021 11:02:44 GMT-0400 (GMT-04:00) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqID, UqIDX, UqIX } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/me ========
//===============================

export enum EnumAccountType {
	cto = 1,
	contentManager = 2
}

export interface Tuid$sheet {
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
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface ParamWriteCTO {
	user: number;
	orderAmount: number;
	orderDeliver: number;
	orderPaid: number;
}
interface ResultWriteCTO {
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface $Piecewise {
	id?: number;
	name: string;
	ratio: number;
	offset: number;
	asc: number;
}

export interface $PiecewiseDetail {
	id?: number;
	parent: number;
	row?: number;
	sec: number;
	value: number;
}

export interface AccountType {
	id?: number;
	type: any;
}

export interface Account {
	id?: number;
	user: number;
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

export interface AccountCTO {
	id: number;
	type?: number;
	orderAmount?: number;
	orderDeliver?: number;
	orderPaid?: number;
	amount?: number;
	$act?: number;
}

export interface AccountCTOType {
	id: number;
	commissionFormula?: number;
	$act?: number;
}

export interface ActParamAccountCTO {
	id: number|IDXValue;
	type?: number|IDXValue;
	orderAmount?: number|IDXValue;
	orderDeliver?: number|IDXValue;
	orderPaid?: number|IDXValue;
	amount?: number|IDXValue;
	$act?: number;
}

export interface ActParamAccountCTOType {
	id: number|IDXValue;
	commissionFormula?: number|IDXValue;
	$act?: number;
}

export interface UserAccountType {
	ix: number;
	xi: number;
}

export interface TeamStaff {
	ix: number;
	xi: number;
}

export interface ParamActs {
	$Piecewise?: $Piecewise[];
	$PiecewiseDetail?: $PiecewiseDetail[];
	accountType?: AccountType[];
	account?: Account[];
	staff?: Staff[];
	team?: Team[];
	accountCTO?: ActParamAccountCTO[];
	accountCTOType?: ActParamAccountCTOType[];
	userAccountType?: UserAccountType[];
	teamStaff?: TeamStaff[];
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$sheet: UqTuid<Tuid$sheet>;
	$user: UqTuid<Tuid$user>;
	WriteCTO: UqAction<ParamWriteCTO, ResultWriteCTO>;
	$poked: UqQuery<Param$poked, Result$poked>;
	$Piecewise: UqID<any>;
	$PiecewiseDetail: UqID<any>;
	AccountType: UqID<any>;
	Account: UqID<any>;
	Staff: UqID<any>;
	Team: UqID<any>;
	AccountCTO: UqIDX<any>;
	AccountCTOType: UqIDX<any>;
	UserAccountType: UqIX<any>;
	TeamStaff: UqIX<any>;
}
