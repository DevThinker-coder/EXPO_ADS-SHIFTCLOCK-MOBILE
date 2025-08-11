import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing, Layouts } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    paddingTop: Spacing.vertical.size20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: Spacing.vertical.size16,
  },
  name: {
    paddingBottom: Spacing.vertical.size4,
    paddingLeft: Spacing.horizontal.size4,
    color: Colors.primary,
  },
  selectedName: {
    color: Colors.black,
    fontWeight: '400',
  },
  tick: {
    width: Dimensions.width.size8,
    height: Dimensions.width.size8,
    backgroundColor: `${Colors.primary}`,
    ...Layouts.centered,
    borderRadius: moderateScale(8),
    tintColor: Colors.primary50,
  },
});

export default styles;
