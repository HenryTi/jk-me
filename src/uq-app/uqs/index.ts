//=== UqApp builder created on Mon Sep 27 2021 10:20:08 GMT-0400 (北美东部夏令时间) ===//
import * as JkMe from './JkMe';
import * as JkProduct from './JkProduct';

export interface UQs {
	JkMe: JkMe.UqExt;
	JkProduct: JkProduct.UqExt;
}

export * as JkMe from './JkMe';
export * as JkProduct from './JkProduct';

export function setUI(uqs:UQs) {
	JkMe.setUI(uqs.JkMe);
	JkProduct.setUI(uqs.JkProduct);
}
