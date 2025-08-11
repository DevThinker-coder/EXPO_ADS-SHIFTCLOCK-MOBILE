import { StyleSheet } from 'react-native';

import { Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.height.size100,
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size20,
    alignItems: 'center',
  },
  textInput: {
    paddingLeft: Spacing.horizontal.size20,
  },
  button: {
    marginVertical: Spacing.vertical.size4,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray,
  },
  separator: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: Spacing.vertical.size16,
    alignItems: 'center',
  },
  biometrics: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: Spacing.vertical.size12,
    paddingBottom: Spacing.vertical.size32,
  },
  biometricItem: {
    paddingVertical: Spacing.vertical.size12,
    borderWidth: 1,
    flex: 1,
    borderColor: Colors.gray,
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  termsAndPrivacy: {
    flexDirection: 'row',
    flex: 1,
    gap: 5,
    bottom: Spacing.vertical.size28,
    position: 'absolute',
  },
  signupHere: {
    color: Colors.primary50,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary50,
  },
});

export default styles;
