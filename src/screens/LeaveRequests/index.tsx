import { FlatList, View } from 'react-native';
import React, { useState } from 'react';

import Tabs from 'components/Tabs';
import type { TabsProps } from 'components/Tabs';
import RequestItem from 'components/RequestItem';
import type { RequestItemProps } from 'components/RequestItem/request-item.types';
import statusTabs from 'constants/status-tabs';
import { images } from 'assets';
import { SCREENS } from 'constants/screen-names';

import type { LeaveRequestsScreen } from './leave-requests.types';
import styles from './styles';

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

const LeaveRequests: LeaveRequestsScreen = ({ navigation }) => {
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
            onPress={() => navigation.navigate(SCREENS.VIEW_LEAVE_REQUEST)}
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

export default LeaveRequests;
