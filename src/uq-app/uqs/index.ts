//=== UqApp builder created on Wed Sep 15 2021 15:26:10 GMT-0400 (北美东部夏令时间) ===//
import * as JkMe from './JkMe';

export interface UQs {
	JkMe: JkMe.UqExt;
}

export * as JkMe from './JkMe';

export function setUI(uqs:UQs) {
	JkMe.setUI(uqs.JkMe);
}
