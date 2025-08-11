import { StyleSheet } from 'react-native';

import { Dimensions, Spacing } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginVertical: Spacing.vertical.size4,
  },
  formBtn: {
    position: 'absolute',
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
    bottom: 0,
  },
});

export default styles;
