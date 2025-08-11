import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import { Colors } from 'styles';

import Typography from 'components/Typography';

import { moderateScale } from 'utils/styles';

import styles from './styles';
import type { ButtonComponent, ButtonDefaultProps } from './button.types';

import variants from './variants';

const defaultProps: ButtonDefaultProps = {
  style: {
    button: {},
    text: {},
  },
  loading: false,
  loadingColor: 'white',
  disabled: false,
  onPress: (_event) => {},
};

const Button: ButtonComponent = (props) => {
  const {
    disabled,
    variant,
    color,
    title,
    loading,
    loadingColor,
    style,
    onPress,
    ...other
  } = { ...defaultProps, ...props };

  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = variants[variant](color);

  const handlePress = async (event: GestureResponderEvent) => {
    setIsPressed(true);
    await Promise.resolve(onPress(event));
    setIsPressed(false);
  };

  const isLoading = loading || isPressed;
  const isDisabled = isLoading || disabled;

  return (
    <TouchableOpacity
      {...other}
      disabled={isDisabled}
      style={[styles.button, variantStyles.button, style?.button]}
      onPress={handlePress}
    >
      {isLoading ? (
        <ActivityIndicator
          size={moderateScale(15)}
          color={Colors[variant === 'outlined' ? color : loadingColor]}
        />
      ) : (
        <Typography
          variant="button"
          style={[styles.text, variantStyles.text, style?.text]}
        >
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Button;
