import React from 'react';
import { DevSettings } from 'react-native';
import type { NavigationContainerRef } from '@react-navigation/native';

import NavigationService from 'navigation/service';
import type { MainNavigatorParamList } from 'navigation/types';
import { SCREENS, NAVIGATORS } from 'constants/screen-names';

type UseInitNavigationReturnType = {
  handleNavigationRef: (
    ref: NavigationContainerRef<MainNavigatorParamList> | null,
  ) => void;
};

const useInitNavigation = (): UseInitNavigationReturnType => {
  const routeNameRef = React.useRef<string | undefined>();
  const navigationRef =
    React.useRef<NavigationContainerRef<MainNavigatorParamList> | null>(null);

  React.useEffect(() => {
    if (navigationRef.current !== null) {
      const state = navigationRef.current.getRootState();
      routeNameRef.current = NavigationService.getActiveRouteName(state);
    }
  }, []);

  const handleNavigationRef = (
    ref: NavigationContainerRef<MainNavigatorParamList> | null,
  ): void => {
    navigationRef.current = ref;
    NavigationService.setTopLevelNavigation(ref);
    if (__DEV__) {
      DevSettings.addMenuItem('Show Dev Menu', () => {
        NavigationService.navigate(NAVIGATORS.DEV, {
          screen: SCREENS.DEV_MENU,
        });
      });
    }
  };

  return {
    handleNavigationRef,
  };
};

export default useInitNavigation;
