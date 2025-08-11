import type { ComponentConfig } from 'storybook/utils/component-config';

import { Spacing } from 'styles';

import Button from './Button';

export default {
  argTypes: {
    variant: {
      control: {
        options: ['contained', 'outlined'],
        type: 'select',
      },
    },
    color: {
      control: {
        options: ['primary', 'primary50', 'black'],
        type: 'select',
      },
    },
    loading: {
      control: {
        options: [true, false],
        type: 'select',
      },
    },
  },
  title: 'Button',
  component: Button,
  props: {
    ar: {},
    en: {
      title: 'Button',
      variant: 'contained',
      color: 'primary',
      style: { button: { marginBottom: Spacing.vertical.size12 } },
    },
  },
} satisfies ComponentConfig<typeof Button>;
