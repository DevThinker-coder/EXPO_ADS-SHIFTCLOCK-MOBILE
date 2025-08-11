import React from 'react';

import type { ComponentConfig } from 'storybook/utils/component-config';

import BigButton from './BigButton';

export default {
  argTypes: {},
  title: 'BigButton',
  component: BigButton,
  props: {
    ar: {},
    en: {
      title: 'Big Button',
      // eslint-disable-next-line react/jsx-no-useless-fragment
      icon: <></>,
    },
  },
} satisfies ComponentConfig<typeof BigButton>;
