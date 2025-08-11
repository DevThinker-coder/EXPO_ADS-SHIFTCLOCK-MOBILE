import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Shadows, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.height.size7,
  },
  tabContainer: {
    borderRadius: moderateScale(8),
  },
  tabs: {
    backgroundColor: Colors.background,
    borderRadius: moderateScale(8),
  },
  tabItem: {
    height: Dimensions.height.size7,
    width:
      (Dimensions.width.size100 -
        Spacing.horizontal.globalHorizontalPadding * 2) /
      3,
    flexDirection: 'row',
    gap: 5,
  },
  tabItemActive: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(8),
    overflow: 'visible',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  tabItemButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default styles;
