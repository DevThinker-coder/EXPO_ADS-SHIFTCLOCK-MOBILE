import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.size20,
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: Dimensions.height.size16,
    alignItems: 'center',
    gap: Spacing.vertical.size56,
  },
  message: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.width.size60,
    height: Dimensions.height.size25,
  },
});
export default styles;
