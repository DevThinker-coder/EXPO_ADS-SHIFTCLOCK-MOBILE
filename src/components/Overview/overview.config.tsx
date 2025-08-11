import type { ComponentConfig } from 'storybook/utils/component-config';

import Overview from './Overview';

export default {
  title: 'Overview',
  component: Overview,
  props: {
    ar: {},
    en: {},
  },
} satisfies ComponentConfig<typeof Overview>;
