import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type React from 'react';

import type { PublicNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';

export type SplashProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.SPLASH
>;
export type SplashScreen = (props: SplashProps) => React.JSX.Element;
