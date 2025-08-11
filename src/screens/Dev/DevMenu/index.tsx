import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View } from 'react-native';

import useNavigation from 'hooks/use-navigation';

import type { DevNavigatorParamList } from 'navigation/types';
import type { SCREENS } from 'constants/screen-names';

import Typography from 'components/Typography';

import styles from '../styles';

import { items } from './items';
import DevList from './list';

type DevMenuProps = NativeStackScreenProps<
  DevNavigatorParamList,
  typeof SCREENS.DEV_MENU
>;

type DevMenuScreen = React.FC<DevMenuProps>;

const DevMenu: DevMenuScreen = () => {
  const { goBack } = useNavigation();
  return (
    <View style={[styles.container, styles.screenContainer]}>
      <Typography variant="heading1" style={styles.title}>
        Dev Menu For Testing
      </Typography>
      <DevList items={items} handleBackPress={goBack} />
    </View>
  );
};

export default DevMenu;
