import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { ShiftNavigatorParamList } from 'navigation/types';

export type ShiftsProps = NativeStackScreenProps<
  ShiftNavigatorParamList,
  typeof SCREENS.SHIFTS
>;

export type ShiftsScreen = (props: ShiftsProps) => JSX.Element;
