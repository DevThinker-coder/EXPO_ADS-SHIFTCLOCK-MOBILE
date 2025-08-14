import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';
import { Colors, Dimensions, Shadows, Spacing } from 'styles';

import { moderateScale } from 'utils/styles';

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

const AttendanceReport = () => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  dateCard: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginBottom: Spacing.vertical.size12,
    borderRadius: moderateScale(12),
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    gap: 0,
    width:
      Dimensions.width.size50 - Spacing.horizontal.globalHorizontalPadding - 5,
  },
  dateText: {
    lineHeight: moderateScale(20),
    fontWeight: '500',
    verticalAlign: 'middle',
  },
  tableContainer: {
    ...Shadows.primary,
    marginTop: Spacing.vertical.size8,
    backgroundColor: Colors.white,
    maxWidth:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  tableHeaderWrapper: {
    width: '100%',
  },
  tableHeader: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size12,
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
    borderStartStartRadius: moderateScale(12),
    borderStartEndRadius: moderateScale(12),
  },
  tableHeading: {
    color: Colors.white,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size12,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  tableCell: {
    color: Colors.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  tableStatus: {
    paddingHorizontal: Spacing.horizontal.size4,
    paddingVertical: Spacing.vertical.size4,
    marginLeft: 'auto',
    borderRadius: moderateScale(12),
  },
  tableStatusText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: moderateScale(9),
  },
  tableLastRow: {
    borderEndEndRadius: moderateScale(12),
    borderEndStartRadius: moderateScale(12),
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
  },
  tableOddRow: {
    backgroundColor: `${Colors.primary50}14`,
  },
});


export default AttendanceReport;
