import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAtomValue } from 'jotai';

import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import type { PublicNavigatorParamList } from 'navigation/types';

import { Login, Onboarding, Signup, Splash, SignupSuccessful } from 'screens';
import CoreTabNavigator from 'navigation/CoreTabNavigator';
import { initialRouteNameAtom } from 'store/atoms';

const Stack = createNativeStackNavigator<PublicNavigatorParamList>();

const PublicNavigator = () => {
  const initialRouteName = useAtomValue(initialRouteNameAtom);

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.SPLASH}
        component={Splash}
        key={SCREENS.SPLASH}
      />
      {initialRouteName === SCREENS.ONBOARDING ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={SCREENS.ONBOARDING}
            component={Onboarding}
            key={SCREENS.ONBOARDING}
          />
        </Stack.Group>
      ) : null}
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        key={SCREENS.LOGIN}
      />
      <Stack.Screen
        name={SCREENS.SIGNUP}
        component={Signup}
        key={SCREENS.SIGNUP}
      />
      <Stack.Screen
        name={SCREENS.SIGNUP_SUCCESSFUL}
        component={SignupSuccessful}
        key={SCREENS.SIGNUP_SUCCESSFUL}
      />
      <Stack.Screen
        name={NAVIGATORS.CORE}
        component={CoreTabNavigator}
        key={NAVIGATORS.CORE}
      />
    </Stack.Navigator>
  );
};
export default PublicNavigator;
