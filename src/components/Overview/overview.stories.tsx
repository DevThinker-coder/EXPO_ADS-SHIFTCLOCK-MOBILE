import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Overview from './Overview';
import overviewConfig from './overview.config';

export default {
  title: 'Overview',
  component: Overview,
} as Meta<typeof Overview>;

export const { playground, variants } = setupComponentStories(overviewConfig);
