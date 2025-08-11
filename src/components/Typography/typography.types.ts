import { type JSX } from 'react';
import type { TextProps } from 'react-native';

export type TypographyVariants =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption1'
  | 'caption2'
  | 'button';

export interface TypographyProps extends TextProps {
  variant: TypographyVariants;
  children: string;
}
export type TypogrpahyComponent = (props: TypographyProps) => JSX.Element;
