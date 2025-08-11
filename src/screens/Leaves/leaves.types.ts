import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { LeaveNavigatorParamList } from 'navigation/types';

export type LeavesProps = NativeStackScreenProps<
  LeaveNavigatorParamList,
  typeof SCREENS.LEAVES
>;

export type LeavesScreen = (props: LeavesProps) => JSX.Element;
