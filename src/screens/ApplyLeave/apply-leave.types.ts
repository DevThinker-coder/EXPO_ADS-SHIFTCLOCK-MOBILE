import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { LeaveNavigatorParamList } from 'navigation/types';

export type ApplyLeaveProps = NativeStackScreenProps<
  LeaveNavigatorParamList,
  typeof SCREENS.APPLY_LEAVE
>;

export type ApplyLeaveScreen = (props: ApplyLeaveProps) => JSX.Element;
