import type { ViewStyle } from 'react-native';

export type BigButtonProps = {
  style?: ViewStyle;
  title: string;
  icon: JSX.Element;
  onPress?: () => void;
};

export type BigButtonComponent = (props: BigButtonProps) => JSX.Element;
