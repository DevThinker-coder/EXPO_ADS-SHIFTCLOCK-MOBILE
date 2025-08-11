import type { PhoneInputProps as RNPhoneInputProps } from 'react-native-international-phone-number';

import type { ViewStyle } from 'react-native';

import type { OptionalPropertyOf } from 'types';

export type PhoneInputProps = OptionalPropertyOf<
  Extract<RNPhoneInputProps, { ref?: never }>
> & {
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
};

export type PhoneInputComponent = (props: PhoneInputProps) => React.JSX.Element;
