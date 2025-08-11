import type { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

import navigationService from 'navigation/service';
import { SCREENS } from 'constants/screen-names';

const useBlockBackPress = <
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
>(
  navigation: NavigationProp<ParamList, RouteName>,
) => {
  useEffect(() => {
    const navigationSubscription = navigation.addListener(
      'beforeRemove',
      () => {},
    );
    const backHandleSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const currentRoute = navigationService.getActiveRoute(
          navigation.getState(),
        );
        if (currentRoute?.name === SCREENS.LOGIN) {
          BackHandler.exitApp();
        }
        return false;
      },
    );
    return () => {
      navigationSubscription();
      backHandleSubscription.remove();
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
};

export default useBlockBackPress;
