import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import GoBack from './GoBack';
import goBackConfig from './go-back.config';

export default {
  title: 'GoBack',
  component: GoBack,
} as Meta<typeof GoBack>;

export const { playground } = setupComponentStories(goBackConfig);
