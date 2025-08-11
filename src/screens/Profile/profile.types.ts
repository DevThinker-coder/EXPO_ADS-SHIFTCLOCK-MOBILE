import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type ProfileProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.PROFILE
>;

export type ProfileScreen = (props: ProfileProps) => JSX.Element;
