import { Platform, StyleSheet } from 'react-native';

import { Colors, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
  },
  inputContainer: {
    paddingVertical: Platform.select({
      ios: Spacing.vertical.size12,
      android: Spacing.vertical.size12,
    }),
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size4,
  },
  disableInput: {
    backgroundColor: Colors.lighGray,
    borderColor: Colors.lighGray,
  },
  textInput: {
    paddingVertical: 0,
    // height: Platform.select({ ios: 40, android: 40 }),
    paddingHorizontal: 0,
  },
  fieldStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    ...Platform.select({
      ios: {},
      android: {
        height: 20,
      },
    }),
  },
});

export default styles;
