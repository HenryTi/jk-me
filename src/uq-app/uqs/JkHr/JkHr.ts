//=== UqApp builder created on Sat Nov 13 2021 19:38:53 GMT-0500 (北美东部标准时间) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqQuery, UqMap } from "tonva-core";


//===============================
//======= UQ 百灵威系统工程部/hr ========
//===============================

export interface Tuid$user {
	id?: number;
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
	timezone: number;
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

export interface TuidEmployee {
	id?: number;
	name: string;
	no: string;
	firstName: string;
	lastName: string;
	title: string;
	Status: string;
	CreateTime: any;
}

export interface TuidRole {
	id?: number;
	no: string;
	name: string;
	note: string;
	IsValid: number;
	CreateTime: any;
}

export interface TuidCompany {
	id?: number;
	no: string;
	name: string;
}

export interface ParamDeleteWebuseEmployee {
	webuser: number;
	employee: number;
}
export interface ResultDeleteWebuseEmployee {
}

export interface ParamAddWebuseEmployee {
	webuser: number;
	employee: number;
}
export interface ResultAddWebuseEmployee {
}

export interface Param$setMyTimezone {
	_timezone: number;
}
export interface Result$setMyTimezone {
}

export interface ParamSearchEmployee {
	key: string;
}
export interface ReturnSearchEmployee$page {
	id: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	title: string;
	Status: string;
	CreateTime: any;
	webuser: number;
	employee: number;
}
export interface ResultSearchEmployee {
	$page: ReturnSearchEmployee$page[];
}

export interface ParamSearchTeam {
	key: string;
}
export interface ReturnSearchTeam$page {
	id: number;
	webuser: number;
	employee: number;
}
export interface ResultSearchTeam {
	$page: ReturnSearchTeam$page[];
}

export interface Param$poked {
}
export interface Return$pokedRet {
	poke: number;
}
export interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamGetWebUser {
	employee: number;
}
export interface ReturnGetWebUserRet {
	webuser: number;
	employee: number;
}
export interface ResultGetWebUser {
	ret: ReturnGetWebUserRet[];
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

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Employee: UqTuid<TuidEmployee>;
	Role: UqTuid<TuidRole>;
	Company: UqTuid<TuidCompany>;
	DeleteWebuseEmployee: UqAction<ParamDeleteWebuseEmployee, ResultDeleteWebuseEmployee>;
	AddWebuseEmployee: UqAction<ParamAddWebuseEmployee, ResultAddWebuseEmployee>;
	$setMyTimezone: UqAction<Param$setMyTimezone, Result$setMyTimezone>;
	SearchEmployee: UqQuery<ParamSearchEmployee, ResultSearchEmployee>;
	SearchTeam: UqQuery<ParamSearchTeam, ResultSearchTeam>;
	$poked: UqQuery<Param$poked, Result$poked>;
	GetWebUser: UqQuery<ParamGetWebUser, ResultGetWebUser>;
	$getMyTimezone: UqQuery<Param$getMyTimezone, Result$getMyTimezone>;
	EmployeeRole: UqMap;
	WebuserEmployee: UqMap;
	EmployeeRelation: UqMap;
}

export function assign(uq: any, to:string, from:any): void {
	let hasEntity = uq.$.hasEntity(to);
	if (hasEntity === false) {
		return;
	}
	Object.assign((uq as any)[to], from);
}
