import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type AttendanceProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.ATTENDANCE
>;

export type AttendanceScreen = (props: AttendanceProps) => JSX.Element;
