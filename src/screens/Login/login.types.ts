import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

export type LoginProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.LOGIN
>;
export type LoginScreen = (props: LoginProps) => JSX.Element;
