import React from 'react';
import { Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import BigButton from 'components/BigButton';
import Typography from 'components/Typography';
import { images } from 'assets';
import MapsIcon from 'assets/svgs/maps.svg';
import ClockoutIcon from 'assets/svgs/clockout.svg';
import StartBreakIcon from 'assets/svgs/start-break.svg';
import { moderateScale } from 'utils/styles';

import { Colors } from 'styles';

import styles from './styles';
import type { AttendanceScreen } from './attendance.types';

const Attendance: AttendanceScreen = () => (
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

export default Attendance;
