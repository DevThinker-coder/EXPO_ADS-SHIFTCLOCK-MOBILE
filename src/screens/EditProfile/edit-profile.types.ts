import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type EditProfileProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.EDIT_PROFILE
>;

export type EditProfileScreen = (props: EditProfileProps) => JSX.Element;
