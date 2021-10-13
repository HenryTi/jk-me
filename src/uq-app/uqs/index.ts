//=== UqApp builder created on Sat Oct 09 2021 14:29:16 GMT-0400 (北美东部夏令时间) ===//
import * as JkMe from './JkMe';
import * as JkProduct from './JkProduct';
import * as JkPointShop from './JkPointShop';

export interface UQs {
	JkMe: JkMe.UqExt;
	JkProduct: JkProduct.UqExt;
	JkPointShop: JkPointShop.UqExt;
}

export * as JkMe from './JkMe';
export * as JkProduct from './JkProduct';
export * as JkPointShop from './JkPointShop';

export function setUI(uqs:UQs) {
	JkMe.setUI(uqs.JkMe);
	JkProduct.setUI(uqs.JkProduct);
	JkPointShop.setUI(uqs.JkPointShop);
}
