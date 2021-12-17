//=== UqApp builder created on Thu Dec 16 2021 16:51:36 GMT-0500 (北美东部标准时间) ===//
import * as JkMe from './JkMe';
import * as JkProduct from './JkProduct';
import * as JkPointShop from './JkPointShop';
import * as JkHr from './JkHr';

export interface UQs {
	JkMe: JkMe.UqExt;
	JkProduct: JkProduct.UqExt;
	JkPointShop: JkPointShop.UqExt;
	JkHr: JkHr.UqExt;
}

export * as JkMe from './JkMe';
export * as JkProduct from './JkProduct';
export * as JkPointShop from './JkPointShop';
export * as JkHr from './JkHr';

export function setUI(uqs:UQs) {
	JkMe.setUI(uqs.JkMe);
	JkProduct.setUI(uqs.JkProduct);
	JkPointShop.setUI(uqs.JkPointShop);
	JkHr.setUI(uqs.JkHr);
}
