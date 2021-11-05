import { UqExt as Uq, assign } from './JkHr';
import * as Employee from './Employee.ui';
import * as Role from './Role.ui';
import * as Company from './Company.ui';
	
export function setUI(uq: Uq) {
	assign(uq, 'Employee', Employee);
	assign(uq, 'Role', Role);
	assign(uq, 'Company', Company);
}
export * from './JkHr';
