import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import type { NavigationState } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import type { SvgProps } from 'react-native-svg';

import DashboardIcon from 'assets/svgs/dashboard.svg';
import DashboardActiveIcon from 'assets/svgs/dashboard-active.svg';
import LeaveIcon from 'assets/svgs/leave.svg';
import LeaveActiveIcon from 'assets/svgs/leave-active.svg';
import ShiftIcon from 'assets/svgs/shift.svg';
import ShiftActiveIcon from 'assets/svgs/shift-active.svg';
import NotificationIcon from 'assets/svgs/notification.svg';
import NotificationActiveIcon from 'assets/svgs/notification-active.svg';
import TickIcon from 'assets/svgs/tick.svg';
import { NAVIGATORS, SCREENS } from 'constants/screen-names';
import { moderateScale } from 'utils/styles';

import { CoreNavigatorsInitialScreen } from 'navigation/constants';

import { Colors, Spacing } from 'styles';

import styles from './styles';

const IconMap = {
  [NAVIGATORS.DASHBOARD]: [DashboardIcon, DashboardActiveIcon],
  [NAVIGATORS.LEAVE]: [LeaveIcon, LeaveActiveIcon],
  [NAVIGATORS.SHIFT]: [ShiftIcon, ShiftActiveIcon],
  [NAVIGATORS.NOTIFICATION]: [NotificationIcon, NotificationActiveIcon],
} as const;

type NavigationRoute = NavigationState['routes'][number];

type UseTabBarRouteConfigOptions = Omit<
  BottomTabBarProps,
  'descriptors' | 'insets'
> & {
  index: number;
  route: NavigationRoute;
};

const getTabBarConfig = (configOptions: UseTabBarRouteConfigOptions) => {
  const { state, route, index, navigation } = configOptions;
  const isFocused = state.index === index;
  const TabBarIcon =
    route.name in IconMap && IconMap[route.name as keyof typeof IconMap]
      ? IconMap[route.name as keyof typeof IconMap][Number(isFocused)]
      : (_props: SvgProps) => null;
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  return { onLongPress, onPress, TabBarIcon, isFocused };
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const currentRoute = state.routes[state.index];
  const tabName = currentRoute.name as keyof typeof CoreNavigatorsInitialScreen;
  const focusedRouteName = getFocusedRouteNameFromRoute(currentRoute);

  const renderRoute = (route: NavigationRoute, index: number) => {
    const { options } = descriptors[route.key];
    const { onLongPress, onPress, TabBarIcon, isFocused } = getTabBarConfig({
      state,
      route,
      index,
      navigation,
    });

    return (
      <TouchableOpacity
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles.tabItem]}
      >
        <TabBarIcon width={moderateScale(25)} height={moderateScale(25)} />
        {isFocused && (
          <View
            style={{
              width: '110%',
              height: 2,
              marginTop: Spacing.vertical.size8,
              backgroundColor: Colors.primary50,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  if (
    !focusedRouteName ||
    CoreNavigatorsInitialScreen[tabName] !== focusedRouteName
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tabItemList}>
          {state.routes
            .slice(0, 2)
            .map((route, index) => renderRoute(route, index))}
        </View>
        <View style={styles.centerTickWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.ATTENDANCE)}
            style={styles.centerTickContainer}
          >
            <TickIcon width={moderateScale(40)} height={moderateScale(40)} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabItemList}>
          {state.routes
            .slice(2)
            .map((route, index) => renderRoute(route, index + 2))}
        </View>
      </View>
    </View>
  );
};

export default TabBar;
