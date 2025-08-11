import { Image, View } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'components/Button';

import Typography from 'components/Typography';
import { images } from 'assets';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from 'constants/screen-names';

const SignupSuccessful = () => {
  const navigation = useNavigation<any>();

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
          navigation.navigate(SCREENS.LOGIN);
        }}
      />
    </SafeAreaView>
  );
};

export default SignupSuccessful;
