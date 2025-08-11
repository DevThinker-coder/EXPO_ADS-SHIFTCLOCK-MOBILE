import type { ComponentConfig } from 'storybook/utils/component-config';

import GoBack from './GoBack';

export default {
  title: 'GoBack',
  component: GoBack,
  props: {
    ar: {},
    en: {},
  },
} satisfies ComponentConfig<typeof GoBack>;
