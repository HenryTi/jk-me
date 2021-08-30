import { UqExt as Uq } from './JkMe';
import * as Staff from './Staff.ui';
import * as Team from './Team.ui';
import * as ItemHistory from './ItemHistory.ui';
import * as OrderDetail from './OrderDetail.ui';
import * as OrderMain from './OrderMain.ui';
import * as PersonSales from './PersonSales.ui';
import * as PersonPostItem from './PersonPostItem.ui';
import * as PersonUser from './PersonUser.ui';
import * as PersonCustomer from './PersonCustomer.ui';
import * as Person from './Person.ui';
import * as DxOrderDetail from './DxOrderDetail.ui';
import * as DxOrderMain from './DxOrderMain.ui';
import * as DxPostItem from './DxPostItem.ui';
import * as DxPendingOrderBound from './DxPendingOrderBound.ui';
import * as TeamStaff from './TeamStaff.ui';
import * as PostItemHistory from './PostItemHistory.ui';
import * as PostItem from './PostItem.ui';
import * as PersonPost from './PersonPost.ui';
import * as IxPendingOrderBoundTo from './IxPendingOrderBoundTo.ui';

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
	assign(uq, 'PersonSales', PersonSales);
	assign(uq, 'PersonPostItem', PersonPostItem);
	assign(uq, 'PersonUser', PersonUser);
	assign(uq, 'PersonCustomer', PersonCustomer);
	assign(uq, 'Person', Person);
	assign(uq, 'DxOrderDetail', DxOrderDetail);
	assign(uq, 'DxOrderMain', DxOrderMain);
	assign(uq, 'DxPostItem', DxPostItem);
	assign(uq, 'DxPendingOrderBound', DxPendingOrderBound);
	assign(uq, 'TeamStaff', TeamStaff);
	assign(uq, 'PostItemHistory', PostItemHistory);
	assign(uq, 'PostItem', PostItem);
	assign(uq, 'PersonPost', PersonPost);
	assign(uq, 'IxPendingOrderBoundTo', IxPendingOrderBoundTo);
}
export * from './JkMe';
