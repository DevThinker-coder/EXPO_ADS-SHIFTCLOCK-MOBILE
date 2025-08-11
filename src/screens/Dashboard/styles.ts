import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size28,
  },
  background: {
    backgroundColor: Colors.primary,
    height: Dimensions.height.size35,
    width: Dimensions.width.size100 + Dimensions.width.size32,
    zIndex: -1000,
    position: 'absolute',
    top: -Dimensions.height.size10,
    left: -(Dimensions.width.size32 / 2),
    borderRadius:
      (Dimensions.width.size100 +
        Dimensions.width.size32 +
        Dimensions.height.size52) /
      2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallLogo: {
    width: Dimensions.width.size25,
    height: Dimensions.height.size5,
  },
  profilePic: {
    width: Dimensions.width.size10,
    height: Dimensions.height.size5,
    alignItems: 'flex-end',
  },
  content: {
    paddingVertical: Spacing.vertical.size36,
  },
});

export default styles;
