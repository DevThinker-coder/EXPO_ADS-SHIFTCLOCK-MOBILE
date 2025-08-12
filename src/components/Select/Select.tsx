import React, { useCallback, useMemo, useRef } from 'react';

import { Picker } from '@react-native-picker/picker';

import EvilIcons from '@expo/vector-icons/EvilIcons';

import { Platform, TouchableWithoutFeedback } from 'react-native';

import { Colors, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

import styles from './styles';
import type { SelectComponent } from './select.types';

const Select: SelectComponent = (props) => {
  const { style = {}, iconColor = Colors.gray, ...rest } = props;
  const ref = useRef(null);
  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

  const ChevronIcon = useCallback(
    () => (
      <TouchableWithoutFeedback
        onPress={() => {}}
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
    };

    (Object.keys(style) as Array<keyof typeof defaultStyles>).forEach((key) => {
      defaultStyles[key] = {
        ...defaultStyles[key],
        ...style[key],
      };
    });
    return defaultStyles;
  }, [style]);

  return (
    <Picker
      {...rest}
      style={selectStyles}
      ref={pickerRef}
      Icon={ChevronIcon}
      onDownArrow={open}
      onUpArrow={close}
    />
  );  
};

export default Select;
