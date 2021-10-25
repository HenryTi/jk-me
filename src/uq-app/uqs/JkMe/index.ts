import { UqExt as Uq, assign } from './JkMe';
import * as Object from './Object.ui';
import * as ItemHistory from './ItemHistory.ui';
import * as OrderDetail from './OrderDetail.ui';
import * as OrderMain from './OrderMain.ui';
import * as ItemTitle from './ItemTitle.ui';
import * as PostTitle from './PostTitle.ui';
import * as ObjectUser from './ObjectUser.ui';
import * as ObjectStaff from './ObjectStaff.ui';
import * as ObjectPost from './ObjectPost.ui';
import * as ObjectCustomer from './ObjectCustomer.ui';
import * as ObjectPostItem from './ObjectPostItem.ui';
import * as Group from './Group.ui';
import * as ObjectDistributor from './ObjectDistributor.ui';
import * as ObjectAgent from './ObjectAgent.ui';
import * as PostBound from './PostBound.ui';
import * as QueueBizOp from './QueueBizOp.ui';
import * as QueueBizMain from './QueueBizMain.ui';
import * as DeliverDetail from './DeliverDetail.ui';
import * as DeliverMain from './DeliverMain.ui';
import * as Role from './Role.ui';
import * as OPIHistory from './OPIHistory.ui';
import * as ObjectAccount from './ObjectAccount.ui';
import * as ObjectAccountHistory from './ObjectAccountHistory.ui';
import * as BizMainBound from './BizMainBound.ui';
import * as DxOrderDetail from './DxOrderDetail.ui';
import * as DxOrderMain from './DxOrderMain.ui';
import * as UserTimezone from './UserTimezone.ui';
import * as DxBizMain from './DxBizMain.ui';
import * as DxBizOp from './DxBizOp.ui';
import * as DxBiz from './DxBiz.ui';
import * as UserObject from './UserObject.ui';
import * as GroupObject from './GroupObject.ui';
import * as UserSuperviseItem from './UserSuperviseItem.ui';
import * as MonthSumProduct from './MonthSumProduct.ui';
import * as MonthSumCustomer from './MonthSumCustomer.ui';
import * as IxBizOpBound from './IxBizOpBound.ui';
import * as IxBizMainBoundTo from './IxBizMainBoundTo.ui';
import * as UserRole from './UserRole.ui';
import * as RoleOps from './RoleOps.ui';
import * as PostItemHistory1 from './PostItemHistory1.ui';
	
export function setUI(uq: Uq) {
	assign(uq, 'Object', Object);
	assign(uq, 'ItemHistory', ItemHistory);
	assign(uq, 'OrderDetail', OrderDetail);
	assign(uq, 'OrderMain', OrderMain);
	assign(uq, 'ItemTitle', ItemTitle);
	assign(uq, 'PostTitle', PostTitle);
	assign(uq, 'ObjectUser', ObjectUser);
	assign(uq, 'ObjectStaff', ObjectStaff);
	assign(uq, 'ObjectPost', ObjectPost);
	assign(uq, 'ObjectCustomer', ObjectCustomer);
	assign(uq, 'ObjectPostItem', ObjectPostItem);
	assign(uq, 'Group', Group);
	assign(uq, 'ObjectDistributor', ObjectDistributor);
	assign(uq, 'ObjectAgent', ObjectAgent);
	assign(uq, 'PostBound', PostBound);
	assign(uq, 'QueueBizOp', QueueBizOp);
	assign(uq, 'QueueBizMain', QueueBizMain);
	assign(uq, 'DeliverDetail', DeliverDetail);
	assign(uq, 'DeliverMain', DeliverMain);
	assign(uq, 'Role', Role);
	assign(uq, 'OPIHistory', OPIHistory);
	assign(uq, 'ObjectAccount', ObjectAccount);
	assign(uq, 'ObjectAccountHistory', ObjectAccountHistory);
	assign(uq, 'BizMainBound', BizMainBound);
	assign(uq, 'DxOrderDetail', DxOrderDetail);
	assign(uq, 'DxOrderMain', DxOrderMain);
	assign(uq, 'UserTimezone', UserTimezone);
	assign(uq, 'DxBizMain', DxBizMain);
	assign(uq, 'DxBizOp', DxBizOp);
	assign(uq, 'DxBiz', DxBiz);
	assign(uq, 'UserObject', UserObject);
	assign(uq, 'GroupObject', GroupObject);
	assign(uq, 'UserSuperviseItem', UserSuperviseItem);
	assign(uq, 'MonthSumProduct', MonthSumProduct);
	assign(uq, 'MonthSumCustomer', MonthSumCustomer);
	assign(uq, 'IxBizOpBound', IxBizOpBound);
	assign(uq, 'IxBizMainBoundTo', IxBizMainBoundTo);
	assign(uq, 'UserRole', UserRole);
	assign(uq, 'RoleOps', RoleOps);
	assign(uq, 'PostItemHistory1', PostItemHistory1);
}
export * from './JkMe';
