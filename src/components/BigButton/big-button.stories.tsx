import type { Meta } from '@storybook/react-native';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import BigButton from './BigButton';
import bigButtonConfig from './big-button.config';

export default {
  title: 'BigButton',
  component: BigButton,
} as Meta<typeof BigButton>;

export const { playground, variants } = setupComponentStories(bigButtonConfig);
