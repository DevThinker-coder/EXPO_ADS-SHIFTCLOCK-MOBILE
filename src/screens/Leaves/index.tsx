import { SectionList, View } from 'react-native';
import React, { useMemo, useState } from 'react';

import { differenceInDays, format } from 'date-fns';

import strings from 'utils/strings';
import Typography from 'components/Typography';
import type { TabItem } from 'components/Tabs';
import Tabs from 'components/Tabs';
import { Colors, Spacing } from 'styles';

import styles from './styles';
import type { LeavesScreen } from './leaves.types';

const leaves = [
  {
    id: 1,
    startDate: '2023-10-16T15:00:00.000Z',
    endDate: '2023-10-16T15:00:00.000Z',
    durationType: 'half-day',
    type: 'casual',
    status: 'Approved',
  },
  {
    id: 2,
    startDate: '2023-07-06T05:00:00.000Z',
    endDate: '2023-07-10T05:00:00.000Z',
    durationType: 'custom',
    type: 'casual',
    status: 'Rejected',
  },
  {
    id: 3,
    startDate: '2023-07-01T05:00:00.000Z',
    endDate: '2023-07-01T05:00:00.000Z',
    durationType: 'full-day',
    type: 'sick',
    status: 'Approved',
  },
] as const;

type LeaveDataItem = {
  id: number;
  title: string;
  subtitle: string;
  type: 'casual' | 'sick';
  status: string;
};

const tabs = [
  {
    id: 1,
    title: 'All',
    name: 'all',
    dot: false,
  },
  {
    id: 2,
    title: 'Casual',
    name: 'casual',
    dot: true,
    dotColor: Colors.yellow,
  },
  {
    id: 3,
    title: 'Sick',
    name: 'sick',
    dot: true,
    dotColor: Colors.red,
  },
] satisfies TabItem[];

const Leaves: LeavesScreen = () => {
  const [activeTab, setActiveTab] = useState('all');

  const sections = useMemo(() => {
    const leaveDataItems = new Map<string, LeaveDataItem[]>();

    leaves
      .filter((item) => activeTab === 'all' || item.type === activeTab)
      .forEach((leave) => {
        const title = strings.capitalizeFirstLetter(leave.type.split('-')[0]);
        const startDate = new Date(leave.startDate);
        const endDate = new Date(leave.endDate);
        const daysDiff = differenceInDays(endDate, startDate);
        const key = format(startDate, 'MMM yyyy');
        const leaveData = {
          id: leave.id,
          title:
            leave.durationType === 'custom'
              ? `${daysDiff} Days Application`
              : `${title} Day Application`,
          subtitle:
            daysDiff > 0
              ? `${format(startDate, 'd MMM')} - ${format(endDate, 'd MMM')}`
              : `${format(startDate, 'E, d MMM')}`,
          status: leave.status,
          type: leave.type,
        };
        let data: LeaveDataItem[] = [];
        if (leaveDataItems.has(key)) {
          data = [...(leaveDataItems.get(key) as LeaveDataItem[])];
        }
        leaveDataItems.set(key, [...data, leaveData]);
      });

    const data: Array<{ title: string; data: LeaveDataItem[] }> = [];
    leaveDataItems.forEach((value, key) => {
      data.push({ title: key, data: value });
    });
    return data;
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <Tabs
        tabs={tabs}
        onTabSelect={(tab) => {
          setActiveTab(tab.name);
        }}
      />

      <SectionList
        sections={sections}
        renderItem={({ item }) => {
          const statusColor =
            item.status === 'Approved' ? Colors.green : Colors.red;
          const typeColor = item.type === 'casual' ? Colors.yellow : Colors.red;
          return (
            <View style={[styles.card, { borderLeftColor: typeColor }]}>
              <View style={styles.left}>
                <Typography variant="caption1" style={styles.title}>
                  {item.title}
                </Typography>
                <Typography variant="button" style={{ fontWeight: 'bold' }}>
                  {item.subtitle}
                </Typography>
              </View>
              <View
                style={[styles.right, { backgroundColor: `${statusColor}33` }]}
              >
                <Typography
                  variant="caption1"
                  style={[
                    styles.status,
                    {
                      color: statusColor,
                    },
                  ]}
                >
                  {item.status}
                </Typography>
              </View>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              alignItems: 'center',
              paddingVertical: Spacing.vertical.size12,
            }}
          >
            <Typography variant="caption1">{title.toUpperCase()}</Typography>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

export default Leaves;
