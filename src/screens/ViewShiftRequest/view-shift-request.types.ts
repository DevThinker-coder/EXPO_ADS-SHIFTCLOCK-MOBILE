import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { ShiftNavigatorParamList } from 'navigation/types';

export type ViewShiftRequestProps = NativeStackScreenProps<
  ShiftNavigatorParamList,
  typeof SCREENS.VIEW_SHIFT_REQUEST
>;

export type ViewShiftRequestScreen = (
  props: ViewShiftRequestProps,
) => JSX.Element;
