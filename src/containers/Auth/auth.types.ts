import type React from 'react';
import type { ViewStyle } from 'react-native';

export type AuthProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  style?: { container?: ViewStyle };
  allowBack?: boolean;
};

export type AuthContainer = (props: AuthProps) => JSX.Element;
