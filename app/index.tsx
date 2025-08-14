import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';

import { useStore } from 'jotai';

import images from 'images';
import useProgress from 'hooks/use-progress';
import { Colors, Dimensions, Layouts, Spacing } from 'styles/index';

import {  useRouter } from 'expo-router';

const Splash = ({ navigation }: any) => {
  const store = useStore();
  const router = useRouter();
  const { progress } = useProgress({
    async onComplete() {
      console.log('onComplete')
      // const isOnboardingComplete = await Storage.get(ONBOARDING_COMPLETE);
      // const initialRouteName: keyof PublicNavigatorParamList =
      //   isOnboardingComplete ? SCREENS.LOGIN : SCREENS.ONBOARDING;
      // store.set(initialRouteNameAtom, initialRouteName);
      // return navigation.navigate(initialRouteName);
      // router.navigate('/onboarding')
      router.replace('(OnboardStack)');
      return null;
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

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    backgroundColor: Colors.primary,
    position: 'relative',
  },
  splash: {
    width: Dimensions.width.size70,
    height: Dimensions.height.size20,
    marginBottom: Spacing.vertical.size28,
  },
  splashBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default Splash;
