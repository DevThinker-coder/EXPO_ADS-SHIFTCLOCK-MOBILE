import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

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

export default styles;
