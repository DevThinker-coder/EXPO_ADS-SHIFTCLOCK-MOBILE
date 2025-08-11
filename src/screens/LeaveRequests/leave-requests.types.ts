import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { LeaveNavigatorParamList } from 'navigation/types';

export type LeaveRequestsProps = NativeStackScreenProps<
  LeaveNavigatorParamList,
  typeof SCREENS.LEAVE_REQUESTS
>;

export type LeaveRequestsScreen = (props: LeaveRequestsProps) => JSX.Element;
