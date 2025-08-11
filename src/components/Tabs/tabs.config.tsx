import type { ComponentConfig } from 'storybook/utils/component-config';

import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  props: {
    ar: {},
    en: {
      tabs: [],
      onTabSelect() {},
    },
  },
} as ComponentConfig<typeof Tabs>;
