import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableWithoutFeedback } from 'react-native';

import type {
  DashboardNavigatorParamList,
  ScreenOptionsFn,
} from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import {
  Dashboard,
  Profile,
  EditProfile,
  About,
  Language,
  Attendance,
  NotificationSettings,
  AttendanceReport,
} from 'screens';
import useNavigationHeader from 'navigation/use-navigation-header';
import { moderateScale } from 'utils/styles';
import AttendanceIcon from 'assets/svgs/attendance.svg';

const DashboardStack = createStackNavigator<DashboardNavigatorParamList>();

type DashboardScreenOptions = ScreenOptionsFn<typeof DashboardStack.Screen>;

const DashboardNavigator = () => {
  const header = useNavigationHeader();

  const attendanceScreenOptions = useCallback<DashboardScreenOptions>(
    ({ navigation }) => ({
      headerTitle: 'Attendance',
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(SCREENS.ATTENDANCE_REPORT)}
        >
          <AttendanceIcon
            width={moderateScale(25)}
            height={moderateScale(25)}
          />
        </TouchableWithoutFeedback>
      ),
      ...header.secondary,
    }),
    [header.secondary],
  );

  return (
    <DashboardStack.Navigator initialRouteName={SCREENS.DASHBOARD}>
      <DashboardStack.Screen
        name={SCREENS.DASHBOARD}
        component={Dashboard}
        key={SCREENS.DASHBOARD}
        options={{ headerShown: false, gestureEnabled: false }}
      />

      <DashboardStack.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        key={SCREENS.PROFILE}
        options={{
          headerTitle: 'Profile',
          ...header.secondary,
        }}
      />
      <DashboardStack.Screen
        name={SCREENS.EDIT_PROFILE}
        component={EditProfile}
        key={SCREENS.EDIT_PROFILE}
        options={{
          headerTitle: 'Edit Profile',
          ...header.secondary,
        }}
      />
      <DashboardStack.Screen
        name={SCREENS.ABOUT}
        component={About}
        key={SCREENS.ABOUT}
        options={{
          headerTitle: 'About',
          ...header.secondary,
        }}
      />
      <DashboardStack.Screen
        name={SCREENS.LANGUAGE}
        component={Language}
        key={SCREENS.LANGUAGE}
        options={{
          headerTitle: 'Language',
          ...header.secondary,
        }}
      />
      <DashboardStack.Screen
        name={SCREENS.NOTIFICATION_SETTINGS}
        component={NotificationSettings}
        key={SCREENS.NOTIFICATION_SETTINGS}
        options={{
          headerTitle: 'Notifications',
          ...header.secondary,
        }}
      />
      <DashboardStack.Screen
        name={SCREENS.ATTENDANCE}
        component={Attendance}
        key={SCREENS.ATTENDANCE}
        options={attendanceScreenOptions}
      />
      <DashboardStack.Screen
        name={SCREENS.ATTENDANCE_REPORT}
        component={AttendanceReport}
        key={SCREENS.ATTENDANCE_REPORT}
        options={{
          headerTitle: 'Attendance Report',
          ...header.secondary,
        }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigator;
