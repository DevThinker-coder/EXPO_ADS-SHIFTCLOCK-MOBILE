import { ScrollView, View } from 'react-native';
import React from 'react';

import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import Button from 'components/Button';

import BuildingIcon from 'assets/svgs/building.svg';
import { moderateScale } from 'utils/styles';
import Typography from 'components/Typography';
import LocationIcon from 'assets/svgs/location.svg';

import { Colors } from 'styles';

import styles from './styles';
import type { ApplyShiftScreen } from './apply-shift.types';

const ApplyShift: ApplyShiftScreen = () => (
  <View style={styles.container}>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.buildingIcon}>
          <BuildingIcon width={moderateScale(42)} height={moderateScale(42)} />
        </View>
        <View style={styles.headerContent}>
          <Typography variant="heading3">West 105 Site</Typography>
          <View style={styles.subtitleRow}>
            <LocationIcon
              width={moderateScale(14)}
              height={moderateScale(14)}
            />
            <Typography variant="caption2">
              13th Street 47 W 13th St, New York, NY
            </Typography>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.fullCard]}>
          <Typography variant="body3" style={styles.itemHeading}>
            Shift Type
          </Typography>
          <View style={styles.fullCardRight}>
            <Feather name="sun" size={moderateScale(14)} />
            <Typography variant="body3" style={styles.fullCardRightText}>
              Day Shift
            </Typography>
          </View>
        </View>

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

        <View style={[styles.fullCard]}>
          <Typography variant="body3" style={styles.itemHeading}>
            Break Length
          </Typography>
          <View style={styles.fullCardRight}>
            <SimpleLineIcons name="cup" size={moderateScale(14)} />
            <Typography variant="body3" style={styles.fullCardRightText}>
              30min
            </Typography>
          </View>
        </View>

        <View style={styles.descriptionCard}>
          <Typography variant="body3" style={styles.itemHeading}>
            Job Description
          </Typography>
          <Typography variant="caption1" style={styles.jobDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </View>
      </View>
    </ScrollView>
    <Button
      variant="contained"
      color="primary"
      title="APPLY"
      style={{ button: styles.applyBtn }}
    />
  </View>
);

export default ApplyShift;
