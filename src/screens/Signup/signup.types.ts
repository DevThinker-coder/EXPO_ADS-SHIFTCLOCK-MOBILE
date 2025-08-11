import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

export type SignupProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SIGNUP
>;
export type SignupScreen = (props: SignupProps) => JSX.Element;
