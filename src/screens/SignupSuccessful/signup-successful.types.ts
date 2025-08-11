import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

export type SignupSuccessfulProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SIGNUP_SUCCESSFUL
>;

export type SignupSuccessfulScreen = (
  props: SignupSuccessfulProps,
) => JSX.Element;
