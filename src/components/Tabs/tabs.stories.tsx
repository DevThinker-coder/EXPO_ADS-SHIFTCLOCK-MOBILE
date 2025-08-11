import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import Tabs from './Tabs';
import tabsConfig from './tabs.config';

export default {
  title: 'Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

export const { variants, playground } = setupComponentStories(tabsConfig);
