import type { ComponentConfig } from 'storybook/utils/component-config';

import Select from './Select';

export default {
  title: 'Select',
  component: Select,
  props: {
    ar: {},
    en: {
      onValueChange: (value) => {
        /* eslint-disable no-console */
        console.log(value);
      },
      items: [
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ],
    },
  },
} satisfies ComponentConfig<typeof Select>;
