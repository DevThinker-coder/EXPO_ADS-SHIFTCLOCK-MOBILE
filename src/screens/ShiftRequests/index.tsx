import { FlatList, View } from 'react-native';
import React, { useState } from 'react';

import type { TabsProps } from 'components/Tabs';
import Tabs from 'components/Tabs';
import statusTabs from 'constants/status-tabs';
import RequestItem from 'components/RequestItem';
import type { RequestItemProps } from 'components/RequestItem/request-item.types';
import { images } from 'assets';
import { SCREENS } from 'constants/screen-names';

import type { ShiftRequestsScreen } from './shift-requests.types';
import styles from './styles';

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

const ShiftRequests: ShiftRequestsScreen = ({ navigation }) => {
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
            onPress={() => navigation.navigate(SCREENS.VIEW_SHIFT_REQUEST)}
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

export default ShiftRequests;
