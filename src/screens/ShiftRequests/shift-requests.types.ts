import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { ShiftNavigatorParamList } from 'navigation/types';

export type ShiftRequestsProps = NativeStackScreenProps<
  ShiftNavigatorParamList,
  typeof SCREENS.SHIFT_REQUESTS
>;

export type ShiftRequestsScreen = (props: ShiftRequestsProps) => JSX.Element;
