import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import StatsCard from './StatsCard';
import statsCardConfig from './stats-card.config';

export default {
  title: 'StatsCard',
  component: StatsCard,
} as Meta<typeof StatsCard>;

export const { playground, variants } = setupComponentStories(statsCardConfig);
