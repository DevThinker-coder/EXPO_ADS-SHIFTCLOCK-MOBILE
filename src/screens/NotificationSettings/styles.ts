import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Shadows, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
  },
  card: {
    ...Layouts.card,
    paddingHorizontal: Spacing.horizontal.size24,
    paddingVertical: Spacing.vertical.size24,
    gap: Spacing.vertical.size28,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: Colors.black,
    fontWeight: '400',
  },
  selectedOption: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  tick: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    backgroundColor: `${Colors.primary}`,
    ...Layouts.centered,
    borderRadius: moderateScale(8),
    tintColor: Colors.primary50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  selectContainer: {
    ...Shadows.primary,
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
    borderWidth: 0,
    marginVertical: 0,
    paddingLeft: 0,
  },
  selectInput: {
    textAlign: 'center',
    fontWeight: '400',
  },
  selectInputAndroidContainer: {
    paddingLeft: Spacing.horizontal.size16,
    elevation: 8,
    shadowOpacity: 0.1,
    borderWidth: 0,
    paddingRight: Spacing.horizontal.size32 + Spacing.horizontal.size4,
  },
  selectInputIOSContainer: {
    paddingLeft: Spacing.horizontal.size16,
    elevation: 0,
    borderWidth: 0,
    paddingRight: Spacing.horizontal.size24,
  },
});

export default styles;
