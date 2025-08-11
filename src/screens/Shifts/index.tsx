import { FlatList, View } from 'react-native';
import React from 'react';

import BuildingIcon from 'assets/svgs/building.svg';
import SunIcon from 'assets/svgs/sun.svg';
import MoonIcon from 'assets/svgs/moon.svg';

import ClockIcon from 'assets/svgs/clock.svg';
import CupIcon from 'assets/svgs/cup.svg';
import BellIcon from 'assets/svgs/bell.svg';

import { moderateScale } from 'utils/styles';
import Typography from 'components/Typography';
import strings from 'utils/strings';
import { Colors } from 'styles';

import styles from './styles';
import type { ShiftsScreen } from './shifts.types';

const shifts = [
  {
    id: 1,
    site: 'East Block Building',
    shift: 'day',
    shiftHours: 8,
    breakHours: 1,
    notification: '15min',
    requested: false,
  },
  {
    id: 2,
    site: 'School Site',
    shift: 'night',
    shiftHours: 6,
    breakHours: 0.5,
    notification: '15min',
    requested: true,
  },
];

const Shifts: ShiftsScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={shifts}
      renderItem={({ item }) => {
        const isDayShift = item.shift === 'day';
        return (
          <View style={styles.card}>
            <View style={styles.left}>
              <BuildingIcon
                width={moderateScale(30)}
                height={moderateScale(30)}
              />
            </View>
            <View style={styles.right}>
              <View style={styles.header}>
                <View style={styles.shift}>
                  {isDayShift ? (
                    <SunIcon
                      width={moderateScale(16)}
                      height={moderateScale(16)}
                    />
                  ) : (
                    <MoonIcon
                      width={moderateScale(16)}
                      height={moderateScale(16)}
                    />
                  )}
                  <Typography
                    variant="caption1"
                    style={{
                      color: isDayShift ? Colors.yellow : Colors.purple,
                    }}
                  >
                    {`${strings.capitalizeFirstLetter(item.shift)} Shift`}
                  </Typography>
                </View>
                {item.requested && (
                  <View style={styles.requested}>
                    <Typography variant="caption2" style={styles.requestedText}>
                      Requested
                    </Typography>
                  </View>
                )}
              </View>

              <Typography variant="button" style={styles.site}>
                {item.site}
              </Typography>
              <View style={styles.line} />
              <View style={styles.details}>
                <View style={styles.detailItem}>
                  <ClockIcon
                    width={moderateScale(12)}
                    height={moderateScale(12)}
                  />
                  <Typography
                    variant="caption1"
                    style={styles.detailItemText}
                  >{`Shift: ${item.shiftHours} hr`}</Typography>
                </View>

                <View style={styles.detailItem}>
                  <CupIcon
                    width={moderateScale(12)}
                    height={moderateScale(12)}
                  />
                  <Typography
                    variant="caption1"
                    style={styles.detailItemText}
                  >{`${item.breakHours}hr`}</Typography>
                </View>

                <View style={styles.detailItem}>
                  <BellIcon
                    width={moderateScale(12)}
                    height={moderateScale(12)}
                  />
                  <Typography
                    variant="caption1"
                    style={styles.detailItemText}
                  >{`${item.notification}`}</Typography>
                </View>
              </View>
            </View>
          </View>
        );
      }}
      style={styles.list}
    />
  </View>
);

export default Shifts;
