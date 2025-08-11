import { StyleSheet } from 'react-native';

import { Dimensions, Colors, Spacing, Shadows } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  dateCard: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginBottom: Spacing.vertical.size12,
    borderRadius: moderateScale(12),
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    gap: 0,
    width:
      Dimensions.width.size50 - Spacing.horizontal.globalHorizontalPadding - 5,
  },
  dateText: {
    lineHeight: moderateScale(20),
    fontWeight: '500',
    verticalAlign: 'middle',
  },
  tableContainer: {
    ...Shadows.primary,
    marginTop: Spacing.vertical.size8,
    backgroundColor: Colors.white,
    maxWidth:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  tableHeaderWrapper: {
    width: '100%',
  },
  tableHeader: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size12,
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
    borderStartStartRadius: moderateScale(12),
    borderStartEndRadius: moderateScale(12),
  },
  tableHeading: {
    color: Colors.white,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size12,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  tableCell: {
    color: Colors.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  tableStatus: {
    paddingHorizontal: Spacing.horizontal.size4,
    paddingVertical: Spacing.vertical.size4,
    marignLeft: 'auto',
    borderRadius: moderateScale(12),
  },
  tableStatusText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: moderateScale(9),
  },
  tableLastRow: {
    borderEndEndRadius: moderateScale(12),
    borderEndStartRadius: moderateScale(12),
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
  },
  tableOddRow: {
    backgroundColor: `${Colors.primary50}14`,
  },
});

export default styles;
