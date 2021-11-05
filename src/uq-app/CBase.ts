//=== UqApp builder created on Thu Nov 04 2021 18:26:34 GMT-0400 (北美东部夏令时间) ===//
import { CSub, CBase, CAppBase, IConstructor } from 'tonva-react';
import { UQs } from './uqs';
import { CApp } from './CApp';

export abstract class CUqBase extends CBase<CApp, UQs> {
}

export abstract class CUqSub<A extends CAppBase<U>, U, T extends CBase<A,U>> extends CSub<A, U, T> {
}

export abstract class CUqApp extends CAppBase<UQs> {
	protected newC<T extends CUqBase>(type: IConstructor<T>, ...param:any[]): T {
		let c = new type(this);
		c.internalInit(...param);
		return c;
	}
}
