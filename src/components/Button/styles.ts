import { StyleSheet } from 'react-native';

import { Colors, Dimensions } from 'styles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: Dimensions.width.size6,
    paddingVertical: Dimensions.height.size2,
    width: '100%',
  },
  text: {
    color: Colors.white,
  },
});
export default styles;
