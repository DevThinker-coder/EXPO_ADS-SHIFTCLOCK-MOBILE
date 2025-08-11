import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
  },
  logo: {
    width: Dimensions.width.size50,
    height: Dimensions.height.size14,
    marginVertical: Spacing.vertical.size28,
  },
  title: {
    textAlign: 'center',
    color: Colors.primary,
  },
  header: {
    gap: 5,
    marginBottom: Spacing.vertical.size20,
  },
});

export default styles;
