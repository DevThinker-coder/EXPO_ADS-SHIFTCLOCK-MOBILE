import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import type {
  DevNavigatorParamList,
  DevScreenComponent,
} from 'navigation/types';
import { SCREENS } from 'constants/screen-names';

import routes from './routes';

const Stack = createStackNavigator<DevNavigatorParamList>();

const devNavigationRoutes = Object.entries(routes);

const DevNavigator = (): React.JSX.Element => (
  <Stack.Navigator
    initialRouteName={SCREENS.DEV_MENU}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      gestureEnabled: false,
      headerShown: true,
    }}
  >
    {devNavigationRoutes.map(([key, options]) => (
      <Stack.Screen
        key={key}
        name={key as keyof DevNavigatorParamList}
        component={options.component as DevScreenComponent}
        options={options.options}
      />
    ))}
  </Stack.Navigator>
);

export default DevNavigator;
