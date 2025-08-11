import type { TextStyle, ViewStyle } from 'react-native';

import { Colors } from 'styles';

import type { ButtonColors, ButtonVariants } from './button.types';

type VariantReturnObj = (color: ButtonColors) => {
  button: ViewStyle;
  text: TextStyle;
};

export default {
  outlined: (color) => ({
    button: {
      backgroundColor: Colors.white,
      borderColor: Colors[color],
      borderWidth: 2,
    },
    text: {
      color: Colors[color],
    },
  }),
  contained: (color) => ({
    button: {
      backgroundColor: Colors[color],
    },
    text: {
      color: Colors.white,
    },
  }),
} as Record<ButtonVariants, VariantReturnObj>;
