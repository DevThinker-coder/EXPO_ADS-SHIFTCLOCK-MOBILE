import {
  type NavigationContainerRef,
  type NavigationState,
  type PartialState,
} from '@react-navigation/native';

import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import type { MainNavigatorParamList } from 'navigation/types';

let Navigation: NavigationContainerRef<MainNavigatorParamList> | null;

const setTopLevelNavigation = (
  NavigationRef: NavigationContainerRef<MainNavigatorParamList> | null,
): void => {
  Navigation = NavigationRef;
};

const navigate = <RouteName extends keyof MainNavigatorParamList>(
  name: RouteName,
  params: MainNavigatorParamList[RouteName],
): void => {
  if (!Navigation) {
    return;
  }

  // @ts-expect-error error due to types mismatch
  Navigation.navigate(name, params);
};

const resetToRoot = (): void => {
  navigate(NAVIGATORS.PUBLIC, {
    screen: SCREENS.SPLASH,
  });
};

const getActiveRoute = (
  state: NavigationState | PartialState<NavigationState> | undefined,
):
  | NavigationState['routes'][0]
  | PartialState<NavigationState>['routes'][0]
  | undefined => {
  if (!state || state.index === null || state.index === undefined)
    return undefined;
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRoute(route.state);
  }

  return route;
};

const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState> | undefined,
): string | undefined => {
  if (!state || state.index === null || state.index === undefined)
    return undefined;
  return getActiveRoute(state)?.name;
};

const getCurrentRouteName = (): string | undefined =>
  getActiveRouteName(Navigation?.getRootState());

export default {
  getActiveRoute,
  getActiveRouteName,
  getCurrentRouteName,
  navigate,
  resetToRoot,
  setTopLevelNavigation,
};
