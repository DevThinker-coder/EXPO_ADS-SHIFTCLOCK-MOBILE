import { StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    gap: Spacing.vertical.size20,
    paddingTop: Spacing.vertical.size20,
  },
  section: {
    gap: Spacing.vertical.size20,
  },
  heading: {},
  paragraph: {},
});

export default styles;
