import { Platform, StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const onboardingImageHeight = Platform.select({
  ios: Dimensions.height.size52,
  android: Dimensions.height.size50,
  default: Dimensions.height.size50,
});

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimensions.height.size4,
    backgroundColor: Colors.white,
  },
  pagination: {
    position: 'absolute',
    top: onboardingImageHeight + Spacing.vertical.size56 - 10,
  },
  paginationItem: {
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
    marginHorizontal: 3,
    width: 12,
    height: 12,
  },
  paginationItemActive: {
    backgroundColor: Colors.primary50,
  },
  paginationItemInactive: {
    backgroundColor: Colors.lighGray,
  },
  item: {
    alignItems: 'center',
    gap: Spacing.vertical.size56 - 10 + 20,
  },
  image: {
    width: Dimensions.width.size95,
    height: onboardingImageHeight,
  },
  button: {
    width: Dimensions.width.size50,
    marginBottom: Spacing.vertical.size28,
  },
  content: {
    alignItems: 'center',
    gap: 15,
  },
  subtitle: {
    width: Dimensions.width.size60,
    textAlign: 'center',
    fontSize: moderateScale(15),
  },
});

export default styles;
