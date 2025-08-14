import { FlatList, StyleSheet, View } from 'react-native';
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
import { Colors, Dimensions, Layouts, Spacing } from 'styles';

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

const Shifts = () => (
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size24,
  },
  card: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: Spacing.vertical.size16,
  },
  list: {
    overflow: 'visible',
  },
  left: {
    width: Dimensions.width.size23,
    height: Dimensions.width.size23,
    borderRadius: Dimensions.width.size23 / 2,
    backgroundColor: `${Colors.primary50}22`,
    ...Layouts.centered,
  },
  right: {
    flex: 1,
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shift: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    paddingBottom: Spacing.vertical.size4,
  },
  requested: {
    backgroundColor: `${Colors.primary}22`,
    paddingHorizontal: Spacing.horizontal.size8,
    paddingVertical: Spacing.vertical.size4,
    borderRadius: moderateScale(8),
  },
  requestedText: {
    fontSize: moderateScale(8),
    color: Colors.primary,
    opacity: 1,
  },
  site: {
    fontWeight: 'bold',
    paddingBottom: Spacing.vertical.size8,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
  },
  details: {
    flexDirection: 'row',
    paddingTop: Spacing.vertical.size8,
    gap: Spacing.horizontal.size12,
  },
  detailItem: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  detailItemText: {
    fontSize: moderateScale(10),
    opacity: 0.6,
  },
});
export default Shifts;
