import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

export type OnboardingProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof SCREENS.ONBOARDING
>;

export type OnboardingScreen = React.FC<OnboardingProps>;
