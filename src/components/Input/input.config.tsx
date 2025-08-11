import type { ComponentConfig } from 'storybook/utils/component-config';

import Input from './Input';

export default {
  argTypes: {
    InputLeftElement: {
      control: {
        options: [null],
        type: 'select',
      },
    },
    InputRightElement: {
      control: {
        options: [null],
        type: 'select',
      },
    },
  },
  props: {
    ar: {},
    en: {
      placeholder: 'Enter your email',
    },
  },
  title: 'Input',
  component: Input,
} satisfies ComponentConfig<typeof Input>;
