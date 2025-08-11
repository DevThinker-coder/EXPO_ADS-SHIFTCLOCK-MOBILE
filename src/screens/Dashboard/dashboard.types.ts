import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type DashboardProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.DASHBOARD
>;

export type DashboardScreen = (props: DashboardProps) => JSX.Element;
