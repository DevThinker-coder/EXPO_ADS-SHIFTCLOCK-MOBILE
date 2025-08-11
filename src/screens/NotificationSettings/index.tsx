import { Platform, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';

import Typography from 'components/Typography';

import TickBlueIcon from 'assets/svgs/tick-blue.svg';
import { moderateScale } from 'utils/styles';
import { Colors, Spacing } from 'styles';
import Select from 'components/Select';

import styles from './styles';

const iconSize = moderateScale(15);

const notificationPreferenceOptions = [
  {
    id: 1,
    title: 'All New Messages',
  },
  {
    id: 2,
    title: 'Daily Reminder',
  },
  {
    id: 3,
    title: 'Nothing',
  },
];

const NotificationSettings = () => {
  const [notificationPreference, setNotificationPreference] =
    useState<number>(1);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Typography variant="heading2">Notify Me About...</Typography>
        {notificationPreferenceOptions.map((option) => {
          const isSelected = option.id === notificationPreference;
          return (
            <TouchableWithoutFeedback
              onPress={() => setNotificationPreference(option.id)}
              key={option.id}
            >
              <View style={styles.option}>
                <Typography
                  variant="heading3"
                  style={[
                    styles.optionText,
                    isSelected && styles.selectedOption,
                  ]}
                >
                  {option.title}
                </Typography>
                {isSelected && (
                  <View style={styles.tick}>
                    <TickBlueIcon width={iconSize} height={iconSize} />
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <View style={{ gap: 10, paddingVertical: Spacing.vertical.size16 }}>
        <Typography variant="heading2">Notification Schedule</Typography>
        <Typography
          variant="heading3"
          style={{ fontWeight: '400', lineHeight: moderateScale(28) }}
        >
          You&apos;ll only receive notifications in the hours you choose. In
          your inactive hours, notifications will be paused.
        </Typography>
      </View>
      <View style={styles.row}>
        <Typography variant="heading3">Allow Notifications</Typography>
        <Select
          style={{
            viewContainer: styles.selectContainer,
            inputAndroid: styles.selectInput,
            inputIOS: styles.selectInput,
            inputAndroidContainer: styles.selectInputAndroidContainer,
            inputIOSContainer: styles.selectInputIOSContainer,
          }}
          iconColor={Colors.black}
          items={[
            {
              label: 'Everyday',
              value: 'everyday',
              key: 'everyday',
            },
          ]}
          value="everyday"
          onValueChange={() => {}}
        />
      </View>
      <View style={styles.row}>
        <Typography variant="heading3">Timing</Typography>
        <View
          style={[
            { flexDirection: 'row', gap: 10, justifyContent: 'flex-end' },
          ]}
        >
          <Select
            style={{
              viewContainer: {
                ...styles.selectContainer,
              },
              inputAndroid: { fontWeight: '400' },
              inputIOS: { fontWeight: '400' },
              inputAndroidContainer: {
                ...styles.selectInputAndroidContainer,
                paddingLeft: Spacing.horizontal.size8,
                paddingRight: Spacing.horizontal.size20,
              },
              iconContainer: {
                right: Platform.select({ android: 2, ios: -10 }),
              },
              inputIOSContainer: {
                ...styles.selectInputIOSContainer,
                paddingLeft: Spacing.horizontal.size12,
                paddingRight: Spacing.horizontal.size12,
              },
            }}
            iconColor={Colors.black}
            items={[
              {
                label: '10:00 AM',
                value: 10,
                key: 10,
              },
            ]}
            value={10}
            onValueChange={() => {}}
          />
          <Select
            style={{
              viewContainer: {
                ...styles.selectContainer,
              },
              inputAndroid: { fontWeight: '400' },
              inputIOS: { fontWeight: '400' },
              inputAndroidContainer: {
                ...styles.selectInputAndroidContainer,
                paddingLeft: Spacing.horizontal.size8,
                paddingRight: Spacing.horizontal.size20,
              },
              iconContainer: {
                right: Platform.select({ android: 2, ios: -10 }),
              },
              inputIOSContainer: {
                ...styles.selectInputIOSContainer,
                paddingLeft: Spacing.horizontal.size12,
                paddingRight: Spacing.horizontal.size12,
              },
            }}
            iconColor={Colors.black}
            items={[
              {
                label: '9:00 PM',
                value: 21,
                key: 21,
              },
            ]}
            value={21}
            onValueChange={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationSettings;
