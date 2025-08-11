import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.centered,
    width: Dimensions.width.size42,
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size12,
    gap: 10,
    borderRadius: moderateScale(10),
  },
  approve: {
    backgroundColor: Colors.primary,
  },
  reject: {
    backgroundColor: Colors.red,
  },
  text: {
    textTransform: 'uppercase',
    color: Colors.white,
    fontWeight: '500',
  },
});

export default styles;
