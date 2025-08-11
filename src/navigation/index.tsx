import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DevNavigator from 'navigation/DevNavigator';
import PublicNavigator from 'navigation/PublicNavigator';

import useInitNavigation from 'navigation/use-init-navigation';

import type { MainNavigatorParamList } from 'navigation/types';
import { NAVIGATORS } from 'constants/screen-names';

const Stack = createStackNavigator<MainNavigatorParamList>();

const Navigation = () => {
  const { handleNavigationRef } = useInitNavigation();

  return (
    <NavigationContainer ref={handleNavigationRef}>
      <Stack.Navigator
        initialRouteName={NAVIGATORS.PUBLIC}
        screenOptions={{ gestureEnabled: false, headerShown: false }}
      >
        <Stack.Screen name={NAVIGATORS.PUBLIC} component={PublicNavigator} />
        <Stack.Screen name={NAVIGATORS.DEV} component={DevNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
