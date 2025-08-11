import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type AboutProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.ABOUT
>;

export type AboutScreen = (props: AboutProps) => JSX.Element;
