import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import DashboardNavigator from './DashboardNavigator';
import LeaveNavigator from './LeaveNavigator';
import ShiftNavigator from './ShiftNavigator';
import NotificationNavigator from './NotificationNavigator';

export const CoreNavigatorsInitialScreen = {
  [NAVIGATORS.DASHBOARD]: SCREENS.DASHBOARD,
  [NAVIGATORS.LEAVE]: SCREENS.LEAVES,
  [NAVIGATORS.SHIFT]: SCREENS.SHIFTS,
  [NAVIGATORS.NOTIFICATION]: SCREENS.NOTIFICATION,
};

export const CoreNavigatorsComponentMap = {
  [NAVIGATORS.DASHBOARD]: DashboardNavigator,
  [NAVIGATORS.LEAVE]: LeaveNavigator,
  [NAVIGATORS.SHIFT]: ShiftNavigator,
  [NAVIGATORS.NOTIFICATION]: NotificationNavigator,
};

export const CoreNavigatorsKeys = Object.keys(
  CoreNavigatorsComponentMap,
) as Array<keyof typeof CoreNavigatorsComponentMap>;
