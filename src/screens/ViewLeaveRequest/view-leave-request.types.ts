import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { LeaveNavigatorParamList } from 'navigation/types';

export type ViewLeaveRequestProps = NativeStackScreenProps<
  LeaveNavigatorParamList,
  typeof SCREENS.VIEW_LEAVE_REQUEST
>;

export type ViewLeaveRequestScreen = (
  props: ViewLeaveRequestProps,
) => JSX.Element;
