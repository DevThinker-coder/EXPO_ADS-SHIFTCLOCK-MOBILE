import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import PhoneInput from './PhoneInput';

import phoneInputConfig from './phone-input.config';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
} as Meta<typeof PhoneInput>;

export const { playground } = setupComponentStories(phoneInputConfig);
