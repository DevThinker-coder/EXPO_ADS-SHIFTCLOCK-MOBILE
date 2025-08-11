import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { ShiftNavigatorParamList } from 'navigation/types';

export type ApplyShiftProps = NativeStackScreenProps<
  ShiftNavigatorParamList,
  typeof SCREENS.APPLY_SHIFT
>;

export type ApplyShiftScreen = (props: ApplyShiftProps) => JSX.Element;
