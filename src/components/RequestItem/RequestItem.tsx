import { Image, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

import Typography from 'components/Typography';

import { Colors } from 'styles';
import strings from 'utils/strings';
import ClockIcon from 'assets/svgs/clock.svg';
import CupIcon from 'assets/svgs/cup.svg';
import SunIcon from 'assets/svgs/sun.svg';
import MoonIcon from 'assets/svgs/moon-outline.svg';

// import BellIcon from 'assets/svgs/bell.svg';
import { moderateScale } from 'utils/styles';

import type { RequestItemComponent } from './request-item.types';

import styles from './styles';

const statusColor = {
  pending: Colors.yellow,
  approved: Colors.green,
  rejected: Colors.red,
};

const RequestItem: RequestItemComponent = (props) => {
  const {
    title,
    description,
    username,
    userprofile,
    date,
    status,
    type,
    onPress,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={userprofile} style={styles.userProfile} />
            <View style={styles.userdetails}>
              <Typography variant="caption1" style={styles.username}>
                {username}
              </Typography>
              <Typography variant="caption2" style={styles.date}>
                {date}
              </Typography>
            </View>
          </View>
          <View
            style={[
              styles.headerRight,
              { backgroundColor: `${statusColor[status]}33` },
            ]}
          >
            <Typography
              variant="caption2"
              style={{ color: statusColor[status] }}
            >
              {strings.capitalizeFirstLetter(status)}
            </Typography>
          </View>
        </View>
        <View style={styles.body}>
          <Typography variant="body2" style={styles.title}>
            {title}
          </Typography>
          <Typography variant="caption1" style={styles.description}>
            {description}
          </Typography>
        </View>
        <View style={styles.line} />
        {type === 'shift' && (
          <View style={styles.details} key="shift-details">
            <View style={styles.detailItem}>
              {props.shiftType === 'night' ? (
                <MoonIcon
                  width={moderateScale(12)}
                  height={moderateScale(12)}
                />
              ) : (
                <SunIcon width={moderateScale(12)} height={moderateScale(12)} />
              )}
              <Typography
                variant="caption1"
                style={styles.detailItemText}
              >{`${strings.capitalizeFirstLetter(
                props.shiftType,
              )} Shift`}</Typography>
            </View>

            <View style={styles.detailItem}>
              <ClockIcon width={moderateScale(12)} height={moderateScale(12)} />
              <Typography
                variant="caption1"
                style={styles.detailItemText}
              >{`Shift: ${props.shiftHours} hr`}</Typography>
            </View>

            <View style={styles.detailItem}>
              <CupIcon width={moderateScale(12)} height={moderateScale(12)} />
              <Typography
                variant="caption1"
                style={styles.detailItemText}
              >{`${props.breakHours}hr`}</Typography>
            </View>
          </View>
        )}
        {type === 'leave' && (
          <View style={styles.details} key="leave-details">
            <View style={styles.detailItem}>
              <Typography
                variant="body3"
                style={styles.detailItemText}
              >{`${strings.capitalizeFirstLetter(
                props.leaveType,
              )} Leave`}</Typography>
            </View>

            <View style={styles.detailItem}>
              <ClockIcon width={moderateScale(12)} height={moderateScale(12)} />
              <Typography
                variant="caption1"
                style={styles.detailItemText}
              >{`Duration: ${props.duration}`}</Typography>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RequestItem;
