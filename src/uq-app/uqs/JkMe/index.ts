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
import * as PostProc from './PostProc.ui';
import * as OrderAction from './OrderAction.ui';
import * as DxOrderDetail from './DxOrderDetail.ui';
import * as DxOrderMain from './DxOrderMain.ui';
import * as UserTimezone from './UserTimezone.ui';
import * as DxOrderAction from './DxOrderAction.ui';
import * as UserObject from './UserObject.ui';
import * as PostItemHistory from './PostItemHistory.ui';
import * as PostItem from './PostItem.ui';
import * as IxOrderBoundTo from './IxOrderBoundTo.ui';
import * as GroupObject from './GroupObject.ui';
import * as UserSuperviseItem from './UserSuperviseItem.ui';
import * as IxOrderActionBoundPostDone from './IxOrderActionBoundPostDone.ui';
	
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
	assign(uq, 'PostProc', PostProc);
	assign(uq, 'OrderAction', OrderAction);
	assign(uq, 'DxOrderDetail', DxOrderDetail);
	assign(uq, 'DxOrderMain', DxOrderMain);
	assign(uq, 'UserTimezone', UserTimezone);
	assign(uq, 'DxOrderAction', DxOrderAction);
	assign(uq, 'UserObject', UserObject);
	assign(uq, 'PostItemHistory', PostItemHistory);
	assign(uq, 'PostItem', PostItem);
	assign(uq, 'IxOrderBoundTo', IxOrderBoundTo);
	assign(uq, 'GroupObject', GroupObject);
	assign(uq, 'UserSuperviseItem', UserSuperviseItem);
	assign(uq, 'IxOrderActionBoundPostDone', IxOrderActionBoundPostDone);
}
export * from './JkMe';
