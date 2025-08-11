import { StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    gap: Spacing.vertical.size24,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    overflow: 'visible',
  },
  tabContainer: {
    paddingLeft: Spacing.horizontal.globalHorizontalPadding,
  },
});

export default styles;
