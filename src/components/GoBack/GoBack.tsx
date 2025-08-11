import { TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from 'assets/svgs/back.svg';
import { moderateScale } from 'utils/styles';

import styles from './styles';

import type { GoBackComponent } from './go-back.types';

const GoBack: GoBackComponent = ({ style }) => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const onPress = () => {
    if (!navigation.canGoBack()) return;
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { top }, style]}
    >
      <BackIcon width={moderateScale(25)} height={moderateScale(25)} />
    </TouchableOpacity>
  );
};

export default GoBack;
