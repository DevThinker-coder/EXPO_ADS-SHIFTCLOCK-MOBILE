import React from 'react';
import { View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';


import type { SCREENS } from 'constants/screen-names';
import type { DevNavigatorParamList } from 'navigation/types';

import styles from './styles';
import Storybook from '../../../../.rnstorybook';
type DevStoryBookProps = NativeStackScreenProps<
  DevNavigatorParamList,
  typeof SCREENS.DEV_STORY_BOOK
>;

type DevStoryBookScreen = React.FC<DevStoryBookProps>;

const DevStoryBook: DevStoryBookScreen = () => (
  <View style={styles.container}>
    <Storybook />
  </View>
);

export default DevStoryBook;
