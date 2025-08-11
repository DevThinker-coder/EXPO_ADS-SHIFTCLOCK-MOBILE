import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { NotificationNavigatorParamList } from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { Notification } from 'screens';
import useNavigationHeader from 'navigation/use-navigation-header';

const NotificationStack =
  createStackNavigator<NotificationNavigatorParamList>();

const NotificationNavigator = () => {
  const header = useNavigationHeader();
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name={SCREENS.NOTIFICATION}
        component={Notification}
        key={SCREENS.NOTIFICATION}
        options={{
          ...header.primary,
          headerTitle: 'Notifications',
        }}
      />
    </NotificationStack.Navigator>
  );
};

export default NotificationNavigator;
