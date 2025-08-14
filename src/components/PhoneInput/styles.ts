import { StyleSheet } from 'react-native';

import { Colors, Spacing, Dimensions } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: moderateScale(15),
    marginVertical: Spacing.vertical.size8,
    borderStyle: 'solid',
    borderColor: Colors.gray,
    minHeight: moderateScale(55),
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
  },
  flagContainer: {
    backgroundColor: Colors.white,
    marginLeft: Spacing.horizontal.size12,
    paddingLeft: 0,
    marginVertical: 2,
    borderRightWidth: 1,
    paddingRight: Spacing.horizontal.size12,
    borderRightColor: Colors.gray,
  },
  flag: {
    gap: 0,
    padding: 0,
    margin: 0,
    marginRight: 0,
    paddingRight: Spacing.horizontal.size8,
  },
  callingCode: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  input: {
    color: Colors.black,
    paddingHorizontal: Spacing.horizontal.size12,
    width: '100%',
  },
});

export default styles;
