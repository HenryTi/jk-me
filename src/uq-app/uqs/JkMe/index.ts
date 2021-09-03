import { UqExt as Uq } from './JkMe';
import * as Staff from './Staff.ui';
import * as Team from './Team.ui';
import * as ItemHistory from './ItemHistory.ui';
import * as OrderDetail from './OrderDetail.ui';
import * as OrderMain from './OrderMain.ui';
import * as PersonPostItem from './PersonPostItem.ui';
import * as PersonUser from './PersonUser.ui';
import * as PersonCustomer from './PersonCustomer.ui';
import * as Person from './Person.ui';
import * as PersonStaff from './PersonStaff.ui';
import * as DxOrderDetail from './DxOrderDetail.ui';
import * as DxOrderMain from './DxOrderMain.ui';
import * as UserTimezone from './UserTimezone.ui';
import * as TeamStaff from './TeamStaff.ui';
import * as PostItemHistory from './PostItemHistory.ui';
import * as PostItem from './PostItem.ui';
import * as IxPendingOrderAction from './IxPendingOrderAction.ui';
import * as IxOrderBoundTo from './IxOrderBoundTo.ui';
import * as IxPendingOrderItem from './IxPendingOrderItem.ui';
import * as UserPerson from './UserPerson.ui';

function assign(uq:Uq, to:string, from:any): void {
	try {
		Object.assign((uq as any)[to], from);
	}
	catch {}
}
	
export function setUI(uq: Uq) {
	assign(uq, 'Staff', Staff);
	assign(uq, 'Team', Team);
	assign(uq, 'ItemHistory', ItemHistory);
	assign(uq, 'OrderDetail', OrderDetail);
	assign(uq, 'OrderMain', OrderMain);
	assign(uq, 'PersonPostItem', PersonPostItem);
	assign(uq, 'PersonUser', PersonUser);
	assign(uq, 'PersonCustomer', PersonCustomer);
	assign(uq, 'Person', Person);
	assign(uq, 'PersonStaff', PersonStaff);
	assign(uq, 'DxOrderDetail', DxOrderDetail);
	assign(uq, 'DxOrderMain', DxOrderMain);
	assign(uq, 'UserTimezone', UserTimezone);
	assign(uq, 'TeamStaff', TeamStaff);
	assign(uq, 'PostItemHistory', PostItemHistory);
	assign(uq, 'PostItem', PostItem);
	assign(uq, 'IxPendingOrderAction', IxPendingOrderAction);
	assign(uq, 'IxOrderBoundTo', IxOrderBoundTo);
	assign(uq, 'IxPendingOrderItem', IxPendingOrderItem);
	assign(uq, 'UserPerson', UserPerson);
}
export * from './JkMe';
