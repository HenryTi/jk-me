import { UqExt as Uq, assign } from './JkMe';
import * as Group from './Group.ui';
		
	export function setUI(uq: Uq) {
	assign(uq, 'Group', Group);
	}
	export * from './JkMe';
	