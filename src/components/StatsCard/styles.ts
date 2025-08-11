import { StyleSheet } from 'react-native';

import { Dimensions, Layouts, Spacing, Shadows, Colors } from 'styles';

const CIRCLE_WIDTH = 6;

const styles = StyleSheet.create({
  container: {
    ...Shadows.primary,
    backgroundColor: Colors.white,
    width: Dimensions.width.size42,
    height: Dimensions.width.size42,
    borderRadius: 15,
    ...Layouts.centered,
    gap: 10,
    paddingVertical: Spacing.vertical.size12,
  },
  circle: {
    marginTop: Spacing.vertical.size12,
    width: Dimensions.width.size25,
    height: Dimensions.width.size25,
    borderRadius: Dimensions.width.size25 / 2,
    opacity: 1,
    ...Layouts.centered,
    position: 'relative',
  },
  circleInner: {
    height: Dimensions.width.size25 / 2,
    width: Dimensions.width.size25 * 0.01,
    position: 'absolute',
    top: 0,
    opacity: 0.3,
    borderTopWidth: CIRCLE_WIDTH,
  },
  wrapper: {
    width: Dimensions.width.size25 - CIRCLE_WIDTH * 2,
    height: Dimensions.width.size25 - CIRCLE_WIDTH * 2,
    borderRadius: Dimensions.width.size25 / 2 - CIRCLE_WIDTH,
    backgroundColor: Colors.white,
    zIndex: 1000,
    position: 'absolute',
    top: CIRCLE_WIDTH,
    ...Layouts.centered,
  },
});

export default styles;
