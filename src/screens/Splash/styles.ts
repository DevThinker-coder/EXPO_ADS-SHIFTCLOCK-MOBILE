import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    backgroundColor: Colors.primary,
    position: 'relative',
  },
  splash: {
    width: Dimensions.width.size70,
    height: Dimensions.height.size20,
    marginBottom: Spacing.vertical.size28,
  },
  splashBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default styles;
