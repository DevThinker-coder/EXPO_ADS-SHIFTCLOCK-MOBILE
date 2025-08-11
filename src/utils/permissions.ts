import { Alert, Platform } from 'react-native';
import type {
  NotificationOption,
  PermissionStatus,
} from 'react-native-permissions';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PERMISSIONS,
  check,
  checkNotifications,
  request,
  requestNotifications,
} from 'react-native-permissions';

import strings from 'utils/strings';

const notificationOptions: NotificationOption[] = ['alert', 'badge', 'sound'];

const requestPermissionHandler = (
  status: PermissionStatus,
  options: { error?: { name?: string } } = {},
) => {
  const isAllowed = status === 'granted';
  if (isAllowed) return;
  let title = 'permission denied';
  const message = 'Please enable it from settings';

  if (options.error?.name) {
    title = `${options.error.name} permission denied`;
  }
  title = strings.capitalizeFirstLetter(title);
  Alert.alert(title, message);
};

const checkNotificationPermission = async () => {
  const result = await checkNotifications();
  const isAllowed = result.status === 'granted';
  if (isAllowed) return;
  const response = await requestNotifications(notificationOptions);
  requestPermissionHandler(response.status, {
    error: { name: 'notification' },
  });
};

type CheckPermission = (
  name: string,
  permissions: Record<'ios' | 'android', Parameters<typeof request>[0]>,
) => Promise<void>;

const checkPermission: CheckPermission = async (name, permissions) => {
  let permission: Parameters<typeof request>[0] = permissions.ios;
  if (Platform.OS === 'android') {
    permission = permissions.android;
  }
  const status = await check(permission);
  const isAllowed = status === 'granted';
  if (isAllowed) return;
  const newStatus = await request(permission);
  requestPermissionHandler(newStatus, { error: { name } });
};

const locationPermissions = {
  android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
} as const;

const cameraPermissions = {
  android: PERMISSIONS.ANDROID.CAMERA,
  ios: PERMISSIONS.IOS.CAMERA,
};

const checkCameraPermission = () =>
  checkPermission('camera', cameraPermissions);

const checkLocationPermission = () =>
  checkPermission('location', locationPermissions);

export default {
  checkNotification: checkNotificationPermission,
  checkCamera: checkCameraPermission,
  checkLocation: checkLocationPermission,
};
