import { View, SectionList } from 'react-native';
import React from 'react';

import CircleTickIcon from 'assets/svgs/circle-tick.svg';
import Typography from 'components/Typography';
import { moderateScale } from 'utils/styles';

import styles from './styles';

const sections = [
  {
    title: 'New',
    data: [
      {
        id: 1,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: true,
      },
      {
        id: 2,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: true,
      },
    ],
  },
  {
    title: '29 - March - 2023',
    data: [
      {
        id: 3,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: false,
      },
      {
        id: 4,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: false,
      },
    ],
  },
  {
    title: '25 - March - 2023',
    data: [
      {
        id: 5,
        title: 'Attendance Marked',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        icon: CircleTickIcon,
        new: false,
      },
      {
        id: 6,
        title: 'Reminders to mark attendance.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...',
        new: false,
      },
    ],
  },
];

const Notification = () => (
  <View style={styles.container}>
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <View style={[styles.item, item.new && styles.newItem]}>
          <View style={styles.titleContainer}>
            <Typography
              variant="body3"
              style={[styles.title, item.new && styles.newTitle]}
            >
              {item.title}
            </Typography>
            {item.icon && (
              <item.icon width={moderateScale(20)} height={moderateScale(20)} />
            )}
          </View>
          <Typography
            variant="caption1"
            style={[styles.body, item.new && styles.newBody]}
          >
            {item.body}
          </Typography>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Typography variant="caption1" style={styles.sectionHeaderText}>
            {title}
          </Typography>
        </View>
      )}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

export default Notification;
