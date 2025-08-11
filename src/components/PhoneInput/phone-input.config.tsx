import React, { useState } from 'react';

import type { ICountry } from 'react-native-international-phone-number';

import type { ComponentConfig } from 'storybook/utils/component-config';

import PhoneInput from './PhoneInput';

const PhoneInputStory = () => {
  const [value, setValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  return (
    <PhoneInput
      value={value}
      selectedCountry={selectedCountry}
      onChangePhoneNumber={setValue}
      onChangeSelectedCountry={setSelectedCountry}
    />
  );
};

export default {
  title: 'PhoneInput',
  component: PhoneInputStory,
  props: {
    ur: {},
    en: {},
  },
} satisfies ComponentConfig<typeof PhoneInputStory>;
