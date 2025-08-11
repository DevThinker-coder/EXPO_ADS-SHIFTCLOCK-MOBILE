import { StyleSheet, Platform } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Dimensions.height.size11,
    backgroundColor: Colors.background,
    width: Dimensions.width.size100,
    ...Platform.select({
      ios: {
        // borderTopStartRadius: moderateScale(40),
        // borderTopEndRadius: moderateScale(40),
        // borderStartStartRadius: moderateScale(40),
        // borderStartEndRadius: moderateScale(40),
      },
      default: {},
    }),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    width: Dimensions.width.size100,
    elevation: Platform.select({ ios: 4, android: 20 }),
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.size32,
    borderTopStartRadius: moderateScale(40),
    borderTopEndRadius: moderateScale(40),
    borderStartStartRadius: moderateScale(40),
    borderStartEndRadius: moderateScale(40),
    gap: Spacing.horizontal.size16,
  },
  tabItemList: {
    paddingVertical: Spacing.vertical.size24,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  selectedTabItem: {
    borderBottomColor: Colors.primary50,
    borderBottomWidth: 3,
    paddingBottom: Spacing.vertical.size8,
  },
  centerTickWrapper: {
    backgroundColor: Colors.background,
    width: Dimensions.width.size23 + 15,
    height: Dimensions.width.size23 + 15,
    borderRadius: Dimensions.width.size23 + 15,
    top: -((Dimensions.width.size23 + 15) / 2),
    ...Layouts.centered,
    borderCurve: 'continuous',
  },
  centerTickContainer: {
    width: Dimensions.width.size23,
    height: Dimensions.width.size23,
    borderRadius: Dimensions.width.size23,
    backgroundColor: Colors.primary50,
    ...Layouts.centered,
  },
});

export default styles;
