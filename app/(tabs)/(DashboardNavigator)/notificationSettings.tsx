import { Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';

import Typography from 'components/Typography';

import TickBlueIcon from 'assets/svgs/tick-blue.svg';
import { moderateScale } from 'utils/styles';
import { Colors, Dimensions, Layouts, Shadows, Spacing } from 'styles';
import Select from 'components/Select';
import DropdownPicker from 'components/DropdownPicker';



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
      </View>
      <View style={styles.row}>
        <Typography variant="heading3">Timing</Typography>
        <View
          style={[
            { flexDirection: 'row', gap: 10, justifyContent: 'flex-end' },
          ]}
        >
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
  },
  card: {
    ...Layouts.card,
    paddingHorizontal: Spacing.horizontal.size24,
    paddingVertical: Spacing.vertical.size24,
    gap: Spacing.vertical.size28,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: Colors.black,
    fontWeight: '400',
  },
  selectedOption: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  tick: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    backgroundColor: `${Colors.primary}`,
    ...Layouts.centered,
    borderRadius: moderateScale(8),
    tintColor: Colors.primary50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  selectContainer: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
    paddingRight: Platform.select({
      ios: Spacing.horizontal.size12,
      android: 0,
    }),
    paddingVertical: Platform.select({
      ios: Spacing.vertical.size12,
      android: 0,
    }),
    width: 'auto',
    borderWidth: 0,
    marginVertical: 0,
    paddingLeft: 0,
  },
  selectInput: {
    textAlign: 'center',
    fontWeight: '400',
  },
  selectInputAndroidContainer: {
    paddingLeft: Spacing.horizontal.size16,
    elevation: 8,
    shadowOpacity: 0.1,
    borderWidth: 0,
    paddingRight: Spacing.horizontal.size32 + Spacing.horizontal.size4,
  },
  selectInputIOSContainer: {
    paddingLeft: Spacing.horizontal.size16,
    elevation: 0,
    borderWidth: 0,
    paddingRight: Spacing.horizontal.size24,
  },
});

export default NotificationSettings;
