import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { SCREENS } from 'constants/screen-names';
import type { NotificationNavigatorParamList } from 'navigation/types';

export type NotificationsProps = NativeStackScreenProps<
  NotificationNavigatorParamList,
  typeof SCREENS.NOTIFICATION
>;

export type NotificationScreen = (props: NotificationsProps) => JSX.Element;
