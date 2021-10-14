//=== UqApp builder created on Wed Oct 13 2021 22:55:19 GMT-0400 (北美东部夏令时间) ===//
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
