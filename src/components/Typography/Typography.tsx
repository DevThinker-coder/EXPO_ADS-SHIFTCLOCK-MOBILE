/* eslint-disable no-restricted-imports */
import type { TextProps, TextStyle } from 'react-native';
import { Text } from 'react-native';
import React from 'react';

import { moderateScale } from 'utils/styles';
import { Colors } from 'styles';

import type {
  TypographyVariants,
  TypogrpahyComponent,
} from './typography.types';

export const typographyVariants: Record<TypographyVariants, TextStyle> = {
  heading1: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    color: Colors.typography100,
    lineHeight: moderateScale(35),
    letterSpacing: 0.5,
    verticalAlign: 'middle',
  },
  heading2: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.typography100,
    lineHeight: moderateScale(26),
    letterSpacing: 0.5,
    verticalAlign: 'middle',
  },
  heading3: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: Colors.typography100,
    lineHeight: moderateScale(22),
    letterSpacing: 0.5,
    verticalAlign: 'middle',
  },
  body1: {
    fontSize: moderateScale(20),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(28),
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: moderateScale(16),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(28),
    letterSpacing: 0.5,
  },
  body3: {
    fontSize: moderateScale(14),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(25),
    letterSpacing: 0.3,
  },
  button: {
    fontSize: moderateScale(16),
    fontWeight: 'normal',
    color: Colors.black,
    lineHeight: moderateScale(20),
  },
  caption1: {
    fontSize: moderateScale(12),
    fontWeight: 'normal',
    letterSpacing: 0.3,
    color: Colors.black,
  },
  caption2: {
    fontSize: moderateScale(10),
    fontWeight: 'normal',
    letterSpacing: 0.3,
    color: Colors.black,
  },
};

const Typography: TypogrpahyComponent = (props) => {
  const { variant, style = {}, children, ...rest } = props;
  const variantStyles = typographyVariants[variant];
  const styles: TextProps['style'] = [variantStyles];

  if (Array.isArray(style)) {
    styles.push(...style);
  } else {
    styles.push(style);
  }

  return (
    <Text style={styles} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
