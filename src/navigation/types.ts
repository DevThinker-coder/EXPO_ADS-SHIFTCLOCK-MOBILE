/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import type {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import type { ComponentProps } from 'react';

import type { SCREENS, NAVIGATORS } from 'constants/screen-names';

export type ScreensParamsList = {
  [SCREENS.DEV_MENU]: undefined;
  [SCREENS.DEV_STORY_BOOK]: undefined;
  [SCREENS.SPLASH]: undefined;
  [SCREENS.ONBOARDING]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGNUP]: undefined;
  [SCREENS.SIGNUP_SUCCESSFUL]: undefined;
  [SCREENS.DASHBOARD]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.EDIT_PROFILE]: undefined;
  [SCREENS.ABOUT]: undefined;
  [SCREENS.LANGUAGE]: undefined;
  [SCREENS.NOTIFICATION_SETTINGS]: undefined;
  [SCREENS.LEAVES]: undefined;
  [SCREENS.APPLY_LEAVE]: undefined;
  [SCREENS.SHIFTS]: undefined;
  [SCREENS.APPLY_SHIFT]: undefined;
  [SCREENS.NOTIFICATION]: undefined;
  [SCREENS.VIEW_LEAVE_REQUEST]: undefined;
  [SCREENS.VIEW_SHIFT_REQUEST]: undefined;
  [SCREENS.SHIFT_REQUESTS]: undefined;
  [SCREENS.LEAVE_REQUESTS]: undefined;
  [SCREENS.ATTENDANCE]: undefined;
  [SCREENS.ATTENDANCE_REPORT]: undefined;
};

export type DashboardScreens =
  | typeof SCREENS.DASHBOARD
  | typeof SCREENS.ATTENDANCE
  | typeof SCREENS.ATTENDANCE_REPORT
  | typeof SCREENS.PROFILE
  | typeof SCREENS.EDIT_PROFILE
  | typeof SCREENS.ABOUT
  | typeof SCREENS.LANGUAGE
  | typeof SCREENS.NOTIFICATION_SETTINGS;

export type DashboardNavigatorParamList = Pick<
  ScreensParamsList,
  DashboardScreens
>;

export type LeaveScreens =
  | typeof SCREENS.LEAVES
  | typeof SCREENS.APPLY_LEAVE
  | typeof SCREENS.LEAVE_REQUESTS
  | typeof SCREENS.VIEW_LEAVE_REQUEST;

export type LeaveNavigatorParamList = Pick<ScreensParamsList, LeaveScreens>;

export type ShiftScreens =
  | typeof SCREENS.SHIFTS
  | typeof SCREENS.APPLY_SHIFT
  | typeof SCREENS.SHIFT_REQUESTS
  | typeof SCREENS.VIEW_SHIFT_REQUEST;

export type ShiftNavigatorParamList = Pick<ScreensParamsList, ShiftScreens>;

export type NotificationScreens = typeof SCREENS.NOTIFICATION;

export type NotificationNavigatorParamList = Pick<
  ScreensParamsList,
  NotificationScreens
>;

export type CoreTabNavigatorParamList = {
  [NAVIGATORS.DASHBOARD]: NavigatorScreenParams<DashboardNavigatorParamList>;
  [NAVIGATORS.LEAVE]: NavigatorScreenParams<LeaveNavigatorParamList>;
  [NAVIGATORS.SHIFT]: NavigatorScreenParams<ShiftNavigatorParamList>;
  [NAVIGATORS.NOTIFICATION]: NavigatorScreenParams<NotificationNavigatorParamList>;
};

export type DevScreens =
  | typeof SCREENS.DEV_MENU
  | typeof SCREENS.DEV_STORY_BOOK;

export type PublicScreens =
  | typeof SCREENS.SPLASH
  | typeof SCREENS.ONBOARDING
  | typeof SCREENS.LOGIN
  | typeof SCREENS.SIGNUP
  | typeof SCREENS.SIGNUP_SUCCESSFUL;

export type PublicNavigatorParamList = Pick<
  ScreensParamsList,
  PublicScreens
> & {
  [NAVIGATORS.CORE]: NavigatorScreenParams<CoreTabNavigatorParamList>;
};

export type DevNavigatorParamList = Pick<ScreensParamsList, DevScreens>;

export type MainNavigatorParamList = {
  [NAVIGATORS.DEV]: NavigatorScreenParams<DevNavigatorParamList>;
  [NAVIGATORS.PUBLIC]: NavigatorScreenParams<PublicNavigatorParamList>;
};
export type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: any;
    }>
  | React.ComponentType<{}>;

export type DevScreenComponent = ScreenComponentType<DevNavigatorParamList>;
export type PublicScreenComponent =
  ScreenComponentType<PublicNavigatorParamList>;

type ScreenConfig<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  ScreenName extends keyof List = keyof List,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  component: React.FC<NativeStackScreenProps<List, ScreenName>>;
  options?: Options;
};

type NavigationRoutes<
  List extends DevNavigatorParamList | PublicNavigatorParamList,
  Options extends
    | StackNavigationOptions
    | NativeStackNavigationOptions = NativeStackNavigationOptions,
> = {
  [ScreenName in keyof List]: ScreenConfig<List, ScreenName, Options>;
};

export type PublicRoutes = NavigationRoutes<
  PublicNavigatorParamList,
  NativeStackNavigationOptions
>;
export type DevRoutes = NavigationRoutes<
  DevNavigatorParamList,
  StackNavigationOptions
>;

export type ScreenOptionsFn<
  TComponent extends React.JSXElementConstructor<any>,
> = NonNullable<
  Exclude<ComponentProps<TComponent>['options'], StackNavigationOptions>
>;
