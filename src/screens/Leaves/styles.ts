import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Shadows, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
  },
  list: {
    alignSelf: 'center',
    overflow: 'visible',
  },
  card: {
    ...Layouts.card,
    borderLeftColor: Colors.primary,
    borderLeftWidth: moderateScale(8),
    paddingVertical: Spacing.vertical.size28,
    paddingHorizontal: Spacing.horizontal.size12,
    borderRadius: 10,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.vertical.size12,
  },
  left: {
    gap: 5,
  },
  title: {
    color: Colors.black,
    opacity: 0.5,
  },
  right: {
    paddingHorizontal: Spacing.horizontal.size12,
    paddingVertical: Spacing.vertical.size8,
    marginRight: Spacing.horizontal.size8,
    borderRadius: moderateScale(25),
  },
  status: {
    fontSize: moderateScale(10),
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    width: '100%',
    height: Dimensions.height.size7,
    marginVertical: Spacing.vertical.size24,
    borderRadius: moderateScale(8),
  },
  tabItem: {
    flex: 1,
    ...Layouts.centered,
    flexDirection: 'row',
    gap: 5,
  },
  tabItemActive: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(8),
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
