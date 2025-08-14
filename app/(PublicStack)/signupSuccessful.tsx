import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'components/Button';

import Typography from 'components/Typography';
import  images  from 'images';


import { router } from 'expo-router';
import { Colors, Dimensions, Spacing } from 'styles/index';

const SignupSuccessful = () => {

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.content}>
        <View style={styles.message}>
          <Typography variant="heading2">Congratulations!</Typography>
          <Typography variant="body3">Successful Account Created</Typography>
        </View>
        <Image
          source={images.success}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Button
        variant="contained"
        color="primary"
        title="GET STARTED"
        onPress={() => {
          router.replace('(tabs)/(DashboardNavigator)/dashboard');
        }}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: Spacing.vertical.size28,
    alignItems: 'center',
    paddingHorizontal: Spacing.horizontal.size20,
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: Dimensions.height.size16,
    alignItems: 'center',
    gap: Spacing.vertical.size56,
  },
  message: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.width.size60,
    height: Dimensions.height.size25,
  },
});

export default SignupSuccessful;
