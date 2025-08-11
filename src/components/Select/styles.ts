import { Platform, StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    paddingVertical: Platform.select({
      android: Spacing.vertical.size4,
      ios: Spacing.vertical.size16,
    }),
    paddingHorizontal: Spacing.horizontal.size20,
    borderRadius: moderateScale(15),
    marginVertical: Spacing.vertical.size4,
  },
  inputIOS: {
    fontSize: moderateScale(15),
    color: Colors.typography100,
    fontWeight: '500',
  },
  inputAndroid: {
    fontSize: moderateScale(15),
    color: Colors.typography100,
  },
  placeholder: {
    fontSize: moderateScale(15),
    color: Colors.gray,
  },
});

export default styles;
