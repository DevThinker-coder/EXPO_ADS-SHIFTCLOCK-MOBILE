import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';
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
    marginBottom: Spacing.vertical.size4,
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
  timingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  timingsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
    borderRadius: moderateScale(10),
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
    paddingLeft: 0,
  },
  selectInput: {
    fontWeight: '400',
  },
  selectInputAndroidContainer: {
    elevation: 8,
    shadowOpacity: 0.1,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size8,
    paddingRight: Spacing.horizontal.size20,
  },
  selectInputIOSContainer: {
    elevation: 0,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size12,
    paddingRight: Spacing.horizontal.size12,
  },
  selectIconContainer: {
    right: Platform.select({ android: 2, ios: -10 }),
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
  additionalInformationLabel: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    paddingVertical: Spacing.vertical.size4,
  },
  docsList: {
    flexDirection: 'row',
    width: Dimensions.width.size100,
    paddingVertical: Spacing.vertical.size16,
    left: Spacing.horizontal.globalHorizontalPadding,
  },
  docContainer: {
    marginRight: Spacing.horizontal.size8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  doc: {
    width: Dimensions.width.size35,
    height: Dimensions.width.size35,
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
