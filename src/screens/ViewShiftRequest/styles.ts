import { StyleSheet } from 'react-native';

import { Dimensions, Colors, Spacing, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: 3,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  date: {
    width: '48.5%',
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontWeight: '400',
  },
  fieldInput: {
    fontWeight: '400',
    color: Colors.black,
  },
  descriptionLabel: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    paddingVertical: Spacing.vertical.size4,
  },
  fullCard: {
    width: '100%',
    backgroundColor: Colors.white,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginBottom: Spacing.vertical.size12,
    paddingVertical: Spacing.vertical.size20,
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
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginBottom: Spacing.vertical.size12,
    borderRadius: moderateScale(15),
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size20,
    gap: 0,
    width:
      Dimensions.width.size50 - Spacing.horizontal.globalHorizontalPadding - 5,
    borderWidth: 1,
    borderColor: Colors.gray,
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
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: Spacing.vertical.size16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    paddingVertical: Spacing.vertical.size16,
  },
});

export default styles;
