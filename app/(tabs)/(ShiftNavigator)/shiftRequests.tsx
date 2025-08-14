import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import type { TabsProps } from 'components/Tabs';
import Tabs from 'components/Tabs';
import statusTabs from 'constants/status-tabs';
import RequestItem from 'components/RequestItem';
import type { RequestItemProps } from 'components/RequestItem/request-item.types';
import  images  from 'images';
import { Colors, Spacing } from 'styles/index';
import { router } from 'expo-router';



type ShiftsData = Omit<
  Extract<RequestItemProps, { type: 'shift' }>,
  'type' | 'onPress'
> & {
  id: number;
};

const shifts = [
  {
    id: 1,
    title: 'Shift Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shiftType: 'night',
    status: 'approved',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    shiftHours: 8,
    breakHours: 1,
  },
  {
    id: 2,
    title: 'Shift Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shiftType: 'night',
    status: 'rejected',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    shiftHours: 8,
    breakHours: 1,
  },
  {
    id: 3,
    title: 'Shift Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shiftType: 'night',
    status: 'pending',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    shiftHours: 8,
    breakHours: 1,
  },
  {
    id: 4,
    title: 'Shift Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    shiftType: 'night',
    status: 'approved',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    shiftHours: 8,
    breakHours: 1,
  },
] satisfies ShiftsData[];

const ShiftRequests = () => {
  const [data, setData] = useState(shifts);

  const onTabSelect: TabsProps['onTabSelect'] = (tab) => {
    setData(() => {
      if (tab.name === 'all') return shifts;
      return shifts.filter(({ status }) => status === tab.name);
    });
  };
  return (
    <View style={styles.container}>
      <Tabs
        style={styles.tabContainer}
        tabs={statusTabs}
        onTabSelect={onTabSelect}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RequestItem
            type="shift"
            {...item}
            onPress={() => router.push('viewShiftRequest')}
          />
        )}
        keyExtractor={({ id }) => id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    gap: Spacing.vertical.size24,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    overflow: 'visible',
  },
  tabContainer: {
    paddingLeft: Spacing.horizontal.globalHorizontalPadding,
  },
});
export default ShiftRequests;
