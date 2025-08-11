import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
  },
  profileImageContainer: {
    ...Layouts.centered,
    position: 'relative',
  },
  profileImage: {
    width: Dimensions.width.size40,
    height: Dimensions.width.size40,
    borderRadius: Dimensions.width.size40 / 2,
  },
  uploaderWrapper: {
    width: Dimensions.width.size11,
    height: Dimensions.width.size11,
    borderRadius: Dimensions.width.size11 / 2,
    position: 'absolute',
    right: Dimensions.width.size23,
    bottom: 2,
    backgroundColor: Colors.white,
    ...Layouts.centered,
  },
  uploader: {
    backgroundColor: Colors.primary50,
    width: Dimensions.width.size10,
    height: Dimensions.width.size10,
    borderRadius: Dimensions.width.size10 / 2,
    ...Layouts.centered,
  },
  user: {
    ...Layouts.centered,
    paddingVertical: Spacing.vertical.size16,
  },
  name: { color: Colors.primary },
  card: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingLeft: Spacing.horizontal.size24,
    paddingRight: Spacing.horizontal.size20,
    paddingVertical: Spacing.vertical.size16,
  },
  chevronleft: { flex: 1, alignItems: 'flex-end' },
});

export default styles;
