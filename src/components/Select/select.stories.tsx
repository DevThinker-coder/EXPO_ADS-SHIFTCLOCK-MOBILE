import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Select from './Select';
import selectConfig from './select.config';

export default {
  title: 'Select',
  component: Select,
} as Meta<typeof Select>;

export const { playground, variants } = setupComponentStories(selectConfig);
