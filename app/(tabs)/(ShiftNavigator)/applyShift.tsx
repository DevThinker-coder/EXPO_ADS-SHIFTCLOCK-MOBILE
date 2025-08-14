import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import Button from 'components/Button';

import BuildingIcon from 'assets/svgs/building.svg';
import { moderateScale } from 'utils/styles';
import Typography from 'components/Typography';
import LocationIcon from 'assets/svgs/location.svg';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const ApplyShift = () => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    paddingTop: Spacing.vertical.size20,
    // paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  header: {
    width: Dimensions.width.size100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    paddingBottom: Spacing.vertical.size16,
  },
  headerContent: {
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  subtitleRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buildingIcon: {
    width: Dimensions.width.size23,
    height: Dimensions.width.size23,
    borderRadius: Dimensions.width.size23 / 2,
    backgroundColor: `${Colors.primary50}22`,
    ...Layouts.centered,
  },
  body: {
    flex: 1,
    width: Dimensions.width.size100,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    overflow: 'visible',
  },
  fullCard: {
    ...Layouts.card,
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size20,
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeading: {
    color: Colors.primary,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  fullCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fullCardRightText: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  dateCard: {
    ...Layouts.card,
    borderRadius: moderateScale(15),
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size20,
    gap: 0,
    width:
      Dimensions.width.size50 - Spacing.horizontal.globalHorizontalPadding - 5,
  },
  dateText: {
    lineHeight: moderateScale(20),
    fontWeight: '500',
    verticalAlign: 'middle',
  },
  descriptionCard: {
    ...Layouts.card,
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size20,
    borderRadius: moderateScale(15),
    flexDirection: 'column',
    gap: 10,
  },
  jobDescription: {
    fontWeight: '400',
    lineHeight: moderateScale(20),
  },
  applyBtnWrapper: {
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    backgroundColor: Colors.white,
    flex: 1,
  },
  applyBtn: {
    marginHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
});


export default ApplyShift;
