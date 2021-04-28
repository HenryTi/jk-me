import { UqExt as Uq } from './JkMe';
import * as $Piecewise from './$Piecewise.ui';
import * as $PiecewiseDetail from './$PiecewiseDetail.ui';
import * as AccountType from './AccountType.ui';
import * as Account from './Account.ui';
import * as Staff from './Staff.ui';
import * as Team from './Team.ui';
import * as AccountCTO from './AccountCTO.ui';
import * as AccountCTOType from './AccountCTOType.ui';
import * as UserAccountType from './UserAccountType.ui';
import * as TeamStaff from './TeamStaff.ui';

export function setUI(uq: Uq) {
	Object.assign(uq.$Piecewise, $Piecewise);
	Object.assign(uq.$PiecewiseDetail, $PiecewiseDetail);
	Object.assign(uq.AccountType, AccountType);
	Object.assign(uq.Account, Account);
	Object.assign(uq.Staff, Staff);
	Object.assign(uq.Team, Team);
	Object.assign(uq.AccountCTO, AccountCTO);
	Object.assign(uq.AccountCTOType, AccountCTOType);
	Object.assign(uq.UserAccountType, UserAccountType);
	Object.assign(uq.TeamStaff, TeamStaff);
}
export * from './JkMe';
