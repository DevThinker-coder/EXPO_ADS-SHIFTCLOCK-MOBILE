import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { DashboardNavigatorParamList } from 'navigation/types';

export type NotificationSettingsProps = NativeStackScreenProps<
  DashboardNavigatorParamList,
  typeof SCREENS.NOTIFICATION_SETTINGS
>;

export type NotificationSettingsScreen = (
  props: NotificationSettingsProps,
) => JSX.Element;
