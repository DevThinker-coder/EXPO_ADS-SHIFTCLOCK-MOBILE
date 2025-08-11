import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type AttendanceReportProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.ATTENDANCE_REPORT
>;

export type AttendanceReportScreen = (
  props: AttendanceReportProps,
) => JSX.Element;
