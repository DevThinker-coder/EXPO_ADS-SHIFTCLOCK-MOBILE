import React, { useState } from 'react';

import type { ICountry } from 'react-native-international-phone-number';
import RNIPhoneNumber, {
  getCountryByCca2,
} from 'react-native-international-phone-number';

import type { PhoneInputComponent } from './phone-input.types';
import styles from './styles';

const PhoneInput: PhoneInputComponent = ({ ...props }) => {
  const [value, setValue] = useState('');
  const [country, setCountry] = useState<ICountry | undefined>(
    getCountryByCca2('US'),
  );
  return (
    <RNIPhoneNumber
      placeholder="111 234 5678"
      keyboardType="phone-pad"
      ref={undefined}
      verticalAlign="middle"
      language="en"
      defaultCountry="US"
      phoneInputStyles={styles}
      value={value}
      selectedCountry={country}
      onChangePhoneNumber={(number) => {
        setValue(number);
        props.onChangeText(`${country?.callingCode || ''}${number}`);
      }}
      onChangeSelectedCountry={(countryCode) => {
        setCountry(countryCode);
        setValue('');
        props.onChangeText(`${countryCode?.callingCode || ''}`);
      }}
    />
  );
};

export default PhoneInput;
