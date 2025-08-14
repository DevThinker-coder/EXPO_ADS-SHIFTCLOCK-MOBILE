import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import BigButton from 'components/BigButton';
import Typography from 'components/Typography';
import { images } from 'assets';
import MapsIcon from 'assets/svgs/maps.svg';
import ClockoutIcon from 'assets/svgs/clockout.svg';
import StartBreakIcon from 'assets/svgs/start-break.svg';
import { moderateScale } from 'utils/styles';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const Attendance = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={images.profilePic}
        resizeMode="contain"
        style={styles.headerLeft}
      />

      <View style={styles.headerMiddle}>
        <Typography variant="body3" style={styles.headerTitle}>
          Your are Clocked In
        </Typography>
        <View style={styles.headerLocation}>
          <MapsIcon width={moderateScale(12)} height={moderateScale(12)} />
          <Typography variant="caption1" style={styles.headerLocationText}>
            East Block Branch
          </Typography>
        </View>
      </View>

      <View style={styles.headerRight}>
        <FontAwesome
          name="check"
          color={Colors.primary50}
          size={moderateScale(28)}
        />
      </View>
    </View>

    <View style={styles.content}>
      <Typography variant="caption1" style={{ opacity: 0.4 }}>
        10 Oct 2023
      </Typography>
      <View style={styles.attendanceHistory}>
        <View style={styles.line} />
        <View style={styles.attendanceHistoryItem}>
          <Typography variant="caption1" style={styles.time}>
            06:15 AM
          </Typography>
          <View style={[styles.dot]} />
          <Typography variant="caption1" style={styles.attendanceAction}>
            Clocked In
          </Typography>
        </View>
        <View style={styles.attendanceHistoryItem}>
          <Typography variant="caption1" style={styles.time}>
            11:15 AM
          </Typography>
          <View
            style={[
              styles.dot,
              {
                backgroundColor: Colors.white,
                borderWidth: 1,
                borderColor: `#ACACAC`,
              },
            ]}
          />

          <Typography
            variant="caption1"
            style={[styles.attendanceAction, { color: `${Colors.black}55` }]}
          >
            Break
          </Typography>
        </View>
        <View style={styles.attendanceHistoryItem}>
          <Typography variant="caption1" style={styles.time}>
            12:10 PM
          </Typography>
          <View style={[styles.dot]} />
          <Typography variant="caption1" style={styles.attendanceAction}>
            Clocked In
          </Typography>
        </View>
      </View>
    </View>

    <View style={styles.mapContainer}>
      <Image source={images.mapMock} resizeMode="contain" style={styles.map} />
    </View>
    <View style={styles.footer}>
      <BigButton
        title="Start Break"
        icon={
          <StartBreakIcon
            width={moderateScale(40)}
            height={moderateScale(40)}
          />
        }
        style={{ backgroundColor: Colors.yellow }}
      />
      <BigButton
        title="Clock Out"
        icon={
          <ClockoutIcon width={moderateScale(40)} height={moderateScale(40)} />
        }
        style={{ backgroundColor: Colors.primary }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size28,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    alignItems: 'center',
  },
  header: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.size20,
  },
  headerLeft: {
    width: Dimensions.width.size16,
    height: Dimensions.width.size16,
  },
  headerTitle: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  headerMiddle: {
    marginLeft: Spacing.horizontal.size4,
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerLocationText: {
    opacity: 0.6,
  },
  headerRight: {
    width: Dimensions.width.size14,
    height: Dimensions.width.size14,
    borderRadius: Dimensions.width.size14 / 2,
    borderWidth: 3,
    borderColor: Colors.primary50,
    ...Layouts.centered,
    marginLeft: 'auto',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    paddingVertical: Spacing.vertical.size16,
  },
  content: {
    alignItems: 'center',
    paddingTop: Spacing.vertical.size8,
    gap: Spacing.vertical.size12,
    width: '100%',
  },
  attendanceHistory: {
    ...Layouts.card,
    width: '100%',
    position: 'relative',
    paddingTop: Spacing.vertical.size28,
    paddingHorizontal: Spacing.horizontal.size20,
    justifyContent: 'space-between',
  },
  attendanceHistoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size20,
    marginRight: Spacing.horizontal.size12,
  },
  time: {
    opacity: 0.4,
    fontSize: moderateScale(13),
    fontWeight: '500',
    width: Dimensions.width.size18,
  },
  attendanceAction: {
    color: Colors.primary,
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
  line: {
    position: 'absolute',
    top: Spacing.vertical.size28,
    left:
      Dimensions.width.size18 +
      Spacing.horizontal.size16 +
      Spacing.horizontal.size20 -
      2,
    width: 4,
    height: '100%',
    backgroundColor: `#ACACAC`,
    zIndex: -2,
  },
  dot: {
    width: 15,
    height: 15,
    alignSelf: 'flex-start',
    transform: [
      {
        translateX: -15 / 2,
      },
    ],
    backgroundColor: Colors.primary,
    borderRadius: 7.5,
  },
  mapContainer: {
    width: '100%',
    height: Dimensions.height.size25,
    paddingVertical: Spacing.vertical.size4,
  },
  map: {
    width: '100%',
    height: Dimensions.height.size25,
    objectFit: 'contain',
  },
});

export default Attendance;
