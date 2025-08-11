import { ScrollView, View } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';
import { Colors } from 'styles';

import type { AttendanceReportScreen } from './attendance-report.types';
import styles from './styles';

const data = [
  {
    id: 1,
    date: '9 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Present',
  },
  {
    id: 2,
    date: '10 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Late',
  },
  {
    id: 3,
    date: '11 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Present',
  },
  {
    id: 4,
    date: '12 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Late',
  },
  {
    id: 5,
    date: '13 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Absent',
  },
  {
    id: 6,
    date: '14 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Present',
  },
  {
    id: 7,
    date: '15 Aug',
    clockIn: '06:15 AM',
    clockOut: '06:15 PM',
    break: '1hr',
    status: 'Present',
  },
] as const;

const tableStatusColors = {
  Present: Colors.green,
  Late: Colors.red,
  Absent: Colors.yellow,
};

const AttendanceReport: AttendanceReportScreen = () => (
  <View style={styles.container}>
    <View style={styles.dateRow}>
      <View style={[styles.dateCard]}>
        <Typography variant="caption1" style={{ color: Colors.primary }}>
          Start Date
        </Typography>
        <Typography variant="body3" style={styles.dateText}>
          9 Aug 2023
        </Typography>
      </View>
      <View style={[styles.dateCard]}>
        <Typography variant="caption1" style={{ color: Colors.primary }}>
          End Date
        </Typography>
        <Typography variant="body3" style={styles.dateText}>
          15 Aug 2023
        </Typography>
      </View>
    </View>

    <ScrollView
      contentContainerStyle={styles.tableContainer}
      stickyHeaderIndices={[0]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.tableHeaderWrapper}>
        <View style={styles.tableHeader}>
          <Typography
            variant="caption2"
            style={[styles.tableHeading, { textAlign: 'left', flex: 0.7 }]}
          >
            Date
          </Typography>
          <Typography variant="caption2" style={[styles.tableHeading]}>
            Clock In
          </Typography>
          <Typography variant="caption2" style={styles.tableHeading}>
            Clock Out
          </Typography>
          <Typography variant="caption2" style={styles.tableHeading}>
            Break
          </Typography>
          <Typography
            variant="caption2"
            style={[styles.tableHeading, { flex: 0.7 }]}
          >
            Status
          </Typography>
        </View>
      </View>
      {data.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.tableRow,
            index === data.length - 1 && styles.tableLastRow,
            index % 2 === 1 && styles.tableOddRow,
          ]}
        >
          <Typography
            variant="caption1"
            style={[styles.tableCell, { textAlign: 'left', flex: 0.7 }]}
          >
            {item.date}
          </Typography>
          <Typography variant="caption1" style={[styles.tableCell]}>
            {item.clockIn}
          </Typography>
          <Typography variant="caption1" style={styles.tableCell}>
            {item.clockOut}
          </Typography>
          <Typography variant="caption1" style={styles.tableCell}>
            {item.break}
          </Typography>
          <View
            style={[
              styles.tableCell,
              { flex: 0.7 },
              styles.tableStatus,
              { backgroundColor: `${tableStatusColors[item.status]}33` },
            ]}
          >
            <Typography
              variant="caption2"
              style={[
                styles.tableStatusText,
                { color: `${tableStatusColors[item.status]}` },
              ]}
            >
              {item.status}
            </Typography>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default AttendanceReport;
