import React from 'react';
import type { TextInputProps } from 'react-native';
import { View, TextInput } from 'react-native';

import { Colors } from 'styles';

import type { OptionalPropertyOf } from 'types';

import Typography from 'components/Typography';

import type { InputComponent, InputProps } from './input.types';
import styles from './styles';

const defaultProps: Required<
  OptionalPropertyOf<Omit<InputProps, keyof TextInputProps>>
> = {
  containerStyle: {},
  textInputStyle: {},
  fieldStyle: {},
  labelStyle: {},
  InputLeftElement: null,
  InputRightElement: null,
  label: '',
};

const Input: InputComponent = (props) => {
  const {
    containerStyle,
    textInputStyle,
    fieldStyle,
    labelStyle,
    InputLeftElement,
    InputRightElement,
    label,
    ...restInput
  } = { ...defaultProps, ...props };
  return (
    <View style={[styles.container, containerStyle]}>
      {InputLeftElement}
      <View style={[styles.textInputContainer, textInputStyle]}>
        {!!label && (
          <Typography variant="caption1" style={[styles.label, labelStyle]}>
            {label}
          </Typography>
        )}
        <TextInput
          style={[styles.textInput, fieldStyle]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={Colors.gray}
          {...restInput}
        />
      </View>
      {InputRightElement}
    </View>
  );
};

export default Input;
