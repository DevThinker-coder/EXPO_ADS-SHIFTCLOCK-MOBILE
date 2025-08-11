import React from 'react';
import { View, Image } from 'react-native';
import { Bar } from 'react-native-progress';

import { useStore } from 'jotai';

import { images } from 'assets';
import useProgress from 'hooks/use-progress';
import { Colors, Dimensions } from 'styles';

import { SCREENS } from 'constants/screen-names';

import Storage from 'utils/storage';
import type { PublicNavigatorParamList } from 'navigation/types';
import { ONBOARDING_COMPLETE } from 'constants/storage';
import { initialRouteNameAtom } from 'store/atoms';

import type { SplashScreen } from './splash.types';
import styles from './styles';

const Splash: SplashScreen = ({ navigation }) => {
  const store = useStore();

  const { progress } = useProgress({
    async onComplete() {
      const isOnboardingComplete = await Storage.get(ONBOARDING_COMPLETE);
      const initialRouteName: keyof PublicNavigatorParamList =
        isOnboardingComplete ? SCREENS.LOGIN : SCREENS.ONBOARDING;
      store.set(initialRouteNameAtom, initialRouteName);
      return navigation.navigate(initialRouteName);
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={images.splash}
        style={styles.splash}
        resizeMode="contain"
      />
      <Image
        source={images.splashBg}
        style={styles.splashBg}
        resizeMode="contain"
      />
      <Bar
        progress={progress}
        width={Dimensions.width.size50}
        color={Colors.primary50}
      />
    </View>
  );
};

export default Splash;
