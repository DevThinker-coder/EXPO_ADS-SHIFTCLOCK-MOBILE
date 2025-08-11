import { StyleSheet, Platform } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
  },
  contentContainer: {
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    paddingTop: Spacing.vertical.size20,
  },
  inputContainer: {
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size4,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 10,
  },
  dateInputContainer: {
    width: Dimensions.width.size43,
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
    paddingRight: Platform.select({
      ios: Spacing.horizontal.size12,
      android: 0,
    }),
    paddingVertical: Platform.select({
      ios: Spacing.vertical.size12,
      android: 0,
    }),
    width: 'auto',
    marginVertical: 0,
    borderRadius: moderateScale(8),
    paddingLeft: 0,
  },
  selectInputAndroidContainer: {
    paddingLeft: Spacing.horizontal.size8,
    paddingRight: Spacing.horizontal.size20,
    elevation: 0,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: moderateScale(8),
  },
  selectInputIOSContainer: {
    elevation: 0,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size12,
    paddingRight: Spacing.horizontal.size12,
  },
  selectInput: { fontWeight: '400' },
  selectIconContainer: {
    right: Platform.select({ android: 2, ios: -10 }),
  },
  timeRow: {
    paddingVertical: Spacing.vertical.size16,
    paddingLeft: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  additionalInformationField: {
    ...Platform.select({
      ios: {
        minHeight: Dimensions.height.size25,
      },
      default: {},
    }),
    padding: 0,
    margin: 0,
  },
  documentPickerBtn: {
    width: '100%',
    // height: Dimensions.height.size12,
    paddingVertical: Spacing.vertical.size24,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.silver,
    ...Layouts.centered,
    marginVertical: Spacing.vertical.size8,
  },
  documentPickerBtnText: {
    color: `${Colors.black}33`,
    fontWeight: '500',
  },
  applyBtn: {
    marginTop: Spacing.vertical.size12,
  },
});

export default styles;
