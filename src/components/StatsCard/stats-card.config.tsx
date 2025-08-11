import type { ComponentConfig } from 'storybook/utils/component-config';

import StatsCard from './StatsCard';

export default {
  title: 'StatsCard',
  component: StatsCard,
  props: {
    ar: {},
    en: {
      color: 'primary',
      value: 60,
      title: 'Present',
    },
  },
} satisfies ComponentConfig<typeof StatsCard>;
