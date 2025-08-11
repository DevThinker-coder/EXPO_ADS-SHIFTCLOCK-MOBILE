import { View } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';
import { Colors, Dimensions } from 'styles';

import styles from './styles';

const labels = [
  {
    id: 1,
    color: Colors.green,
    text: 'Present',
  },
  {
    id: 2,
    color: Colors.yellow,
    text: 'Absent',
  },
  {
    id: 3,
    color: Colors.red,
    text: 'Late',
  },
];

const monthsDataInBar = [
  {
    id: 1,
    month: 'april',
    present: 70,
    absent: 10,
    late: 0,
  },
  {
    id: 2,
    month: 'may',
    present: 50,
    absent: 25,
    late: 0,
  },
  {
    id: 3,
    month: 'june',
    present: 75,
    absent: 15,
    late: 0,
  },
  {
    id: 4,
    month: 'july',
    present: 60,
    absent: 0,
    late: 20,
  },
  {
    id: 5,
    month: 'aug',
    present: 75,
    absent: 0,
    late: 25,
  },
  {
    id: 6,
    month: 'septmeber',
    present: 65,
    absent: 15,
    late: 0,
  },
  {
    id: 7,
    month: 'october',
    present: 60,
    absent: 0,
    late: 30,
  },
];

const Overview = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Typography variant="body2" style={styles.title}>
        Overview
      </Typography>
      <Typography variant="body2" style={styles.date}>
        10 Oct, 08:00 AM
      </Typography>
    </View>
    <View style={styles.labels}>
      {labels.map((label) => (
        <View style={styles.label} key={label.id}>
          <View
            key={label.id}
            style={[styles.labelColor, { backgroundColor: label.color }]}
          />

          <Typography
            variant="caption1"
            style={[styles.labelText, { color: label.color }]}
          >
            {label.text}
          </Typography>
        </View>
      ))}
    </View>
    <View style={styles.row}>
      {monthsDataInBar.map((month) => (
        <View
          style={[styles.item, month.month === 'october' && { opacity: 1 }]}
          key={month.id}
        >
          <View style={styles.bar}>
            {month.late > 0 && (
              <View
                style={{
                  height: Dimensions.height.size10 * (month.late / 100),
                  backgroundColor: Colors.red,
                  borderStartEndRadius: 3,
                  borderStartStartRadius: 3,
                  ...(month.present === 0 &&
                    month.absent === 0 && {
                      borderEndEndRadius: 3,
                      borderEndStartRadius: 3,
                    }),
                }}
              />
            )}

            {month.absent > 0 && (
              <View
                style={{
                  height: Dimensions.height.size10 * (month.absent / 100),
                  backgroundColor: Colors.yellow,
                  ...(month.late === 0 && {
                    borderStartEndRadius: 3,
                    borderStartStartRadius: 3,
                  }),
                  ...(month.present === 8 && {
                    borderEndEndRadius: 3,
                    borderEndStartRadius: 3,
                  }),
                }}
              />
            )}
            {month.present > 0 && (
              <View
                style={{
                  height: Dimensions.height.size10 * (month.present / 100),
                  backgroundColor: Colors.green,
                  ...(month.late === 0 &&
                    month.absent === 0 && {
                      borderStartEndRadius: 3,
                      borderStartStartRadius: 3,
                    }),
                  borderEndEndRadius: 3,
                  borderEndStartRadius: 3,
                }}
              />
            )}
          </View>
          <Typography variant="caption1">
            {month.month.substring(0, 3).toUpperCase()}
          </Typography>
        </View>
      ))}
    </View>
  </View>
);

export default Overview;
