import type { ComponentConfig } from 'storybook/utils/component-config';

import Typography, { typographyVariants } from './Typography';

export default {
  argTypes: {
    variant: {
      control: {
        options: Object.keys(typographyVariants),
        type: 'select',
      },
    },
  },
  title: 'Typography',
  component: Typography,
  props: {
    ar: {},
    en: {
      children: 'This is a text',
      variant: 'body1',
    },
  },
} satisfies ComponentConfig<typeof Typography>;
