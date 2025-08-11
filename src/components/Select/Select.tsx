import React, { useCallback, useMemo, useRef } from 'react';

import type { PickerStyle } from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { Platform, TouchableWithoutFeedback } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

import styles from './styles';
import type { SelectComponent } from './select.types';

const Select: SelectComponent = (props) => {
  const { style = {}, iconColor = Colors.gray, ...rest } = props;
  const ref = useRef<RNPickerSelect>(null);

  const ChevronIcon = useCallback(
    () => (
      <TouchableWithoutFeedback
        onPress={() => ref.current?.togglePicker()}
        style={{
          display: Platform.select({ android: 'none', ios: 'flex' }),
        }}
      >
        <EvilIcons
          name="chevron-down"
          size={moderateScale(25)}
          color={iconColor}
        />
      </TouchableWithoutFeedback>
    ),
    /* eslint-disable react-hooks/exhaustive-deps */
    [iconColor],
  );

  const selectStyles = useMemo(() => {
    const defaultStyles = {
      viewContainer: styles.container,
      inputAndroidContainer: { ...styles.container, paddingVertical: 0 },
      placeholder: styles.placeholder,
      iconContainer: Platform.select({
        ios: {
          top: -1,
          right: -5,
        },
        android: {
          top: '22%',
          right: Spacing.horizontal.size8,
        },
      }),
      inputAndroid: styles.inputAndroid,
      inputIOS: styles.inputIOS,
      inputIOSContainer: { paddingVertical: 0 },
    } as PickerStyle;

    (Object.keys(style) as Array<keyof PickerStyle>).forEach((key) => {
      defaultStyles[key] = {
        ...defaultStyles[key],
        ...style[key],
      };
    });
    return defaultStyles;
  }, [style]);

  return (
    <RNPickerSelect
      {...rest}
      style={selectStyles}
      onDownArrow={() => {
        ref.current?.togglePicker();
      }}
      ref={ref}
      useNativeAndroidPickerStyle={false}
      Icon={ChevronIcon}
    />
  );
};

export default Select;
