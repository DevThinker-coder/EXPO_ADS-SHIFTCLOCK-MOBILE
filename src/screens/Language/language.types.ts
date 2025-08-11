import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type LanguageProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.LANGUAGE
>;

export type LanguageScreen = (props: LanguageProps) => JSX.Element;
