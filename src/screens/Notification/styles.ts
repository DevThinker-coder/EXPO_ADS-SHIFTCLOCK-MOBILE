import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size8,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    position: 'relative',
  },
  list: {
    overflow: 'visible',
  },
  listContent: {
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    alignItems: 'center',
  },
  sectionHeader: {
    paddingVertical: Spacing.vertical.size12,
    paddingBottom: Spacing.vertical.size20,
    alignItems: 'center',
  },
  sectionHeaderText: {
    textTransform: 'uppercase',
    color: `${Colors.black}80`,
  },
  item: {
    ...Layouts.card,
    elevation: 8,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    alignItems: 'flex-start',
    gap: 3,
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size20,
  },
  newItem: {
    backgroundColor: Colors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  newTitle: {
    color: Colors.white,
  },
  body: {
    color: `${Colors.black}55`,
    fontSize: moderateScale(13),
    width: '100%',
    lineHeight: moderateScale(16),
  },
  newBody: {
    color: `${Colors.white}55`,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: '55%',
    transform: [{ translateX: -Dimensions.width.size30 }],
    height: Dimensions.height.size5 + 1,
    width: Dimensions.width.size60,
    opacity: 1,
    shadowOpacity: 0.8,
    shadowColor: Colors.gray,
    shadowRadius: 30,
    shadowOffset: {
      width: -Dimensions.width.size30,
      height: -Dimensions.height.size7,
    },
    zIndex: 100,
    elevation: 20,
    backgroundColor: Colors.background,
  },
});

export default styles;
