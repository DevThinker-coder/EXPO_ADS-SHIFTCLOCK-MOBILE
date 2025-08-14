import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import Tabs from 'components/Tabs';
import type { TabsProps } from 'components/Tabs';
import RequestItem from 'components/RequestItem';
import type { RequestItemProps } from 'components/RequestItem/request-item.types';
import statusTabs from 'constants/status-tabs';
import { images } from 'assets';
import { router } from 'expo-router';
import { Colors, Spacing } from 'styles/index';

type LeavesData = Omit<
  Extract<RequestItemProps, { type: 'leave' }>,
  'type' | 'onPress'
> & {
  id: number;
};

const leaves = [
  {
    id: 1,
    title: 'Leave Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    leaveType: 'casual',
    status: 'approved',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    duration: '1 day',
  },
  {
    id: 2,
    title: 'Leave Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    leaveType: 'casual',
    status: 'rejected',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    duration: '1 day',
  },
  {
    id: 3,
    title: 'Leave Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    leaveType: 'casual',
    status: 'pending',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    duration: '1 day',
  },
  {
    id: 4,
    title: 'Leave Request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    leaveType: 'casual',
    status: 'approved',
    username: 'John Doe',
    userprofile: images.userProfile,
    date: '19 Oct 23',
    duration: '1 day',
  },
] satisfies LeavesData[];

const LeaveRequests = () => {
  const [data, setData] = useState(leaves);

  const onTabSelect: TabsProps['onTabSelect'] = (tab) => {
    setData(() => {
      if (tab.name === 'all') return leaves;
      return leaves.filter(({ status }) => status === tab.name);
    });
  };

  return (
    <View style={styles.container}>
      <Tabs
        tabs={statusTabs}
        style={styles.tabContainer}
        onTabSelect={onTabSelect}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RequestItem
            type="leave"
            {...item}
            onPress={()=>router.push('viewLeaveRequest')}
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
  tabContainer: {
    paddingLeft: Spacing.horizontal.globalHorizontalPadding,
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
});

export default LeaveRequests;
