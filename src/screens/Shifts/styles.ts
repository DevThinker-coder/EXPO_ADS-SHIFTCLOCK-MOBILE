import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size24,
  },
  card: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: Spacing.vertical.size16,
  },
  list: {
    overflow: 'visible',
  },
  left: {
    width: Dimensions.width.size23,
    height: Dimensions.width.size23,
    borderRadius: Dimensions.width.size23 / 2,
    backgroundColor: `${Colors.primary50}22`,
    ...Layouts.centered,
  },
  right: {
    flex: 1,
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shift: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    paddingBottom: Spacing.vertical.size4,
  },
  requested: {
    backgroundColor: `${Colors.primary}22`,
    paddingHorizontal: Spacing.horizontal.size8,
    paddingVertical: Spacing.vertical.size4,
    borderRadius: moderateScale(8),
  },
  requestedText: {
    fontSize: moderateScale(8),
    color: Colors.primary,
    opacity: 1,
  },
  site: {
    fontWeight: 'bold',
    paddingBottom: Spacing.vertical.size8,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
  },
  details: {
    flexDirection: 'row',
    paddingTop: Spacing.vertical.size8,
    gap: Spacing.horizontal.size12,
  },
  detailItem: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  detailItemText: {
    fontSize: moderateScale(10),
    opacity: 0.6,
  },
});

export default styles;
