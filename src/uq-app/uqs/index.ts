//=== UqApp builder created on Tue Sep 07 2021 17:01:13 GMT-0400 (北美东部夏令时间) ===//
import * as JkMe from './JkMe';

export interface UQs {
	JkMe: JkMe.UqExt;
}

export * as JkMe from './JkMe';

export function setUI(uqs:UQs) {
	JkMe.setUI(uqs.JkMe);
}
