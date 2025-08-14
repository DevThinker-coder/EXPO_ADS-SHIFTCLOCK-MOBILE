import { Image, Platform, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { SCREENS } from 'constants/screen-names';
import { images } from 'assets';

import Typography from 'components/Typography';
import Button from 'components/Button';
import Storage from 'utils/storage';
import { ONBOARDING_COMPLETE } from 'constants/storage';

import { Colors, Dimensions, Layouts, Spacing } from 'styles';

import { useRouter } from 'expo-router';
import { moderateScale } from 'utils/styles';

const screens = [
  {
    id: 1,
    title: 'Clock in and out',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Stay update with notifications',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Detailed Information',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    image: images.onboarding3,
  },
];

const Onboarding = (props: any) => {
  const router = useRouter();
  console.log('onboarding',props)
  const [swipeIndex, setSwipeIndex] = useState(0);
  const swiperRef = useRef<SwiperFlatList>(null);

  const onNextPress = async () => {
    if (swipeIndex === screens.length - 1) {
      console.log("onNextPress")
      // await Storage.set(ONBOARDING_COMPLETE, true);
      // return props.navigation.navigate(SCREENS.LOGIN);
      router.replace('login'); 
    }
    return swiperRef.current?.scrollToIndex({ index: swipeIndex + 1 });
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        autoplayLoop={false}
        index={swipeIndex}
        ref={swiperRef}
        onChangeIndex={({ index }) => setSwipeIndex(index)}
        style={{ flex: 0.5, height: Dimensions.height.size50 }}
        contentContainerStyle={{ backgroundColor: Colors.white }}
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationStyleItemActive={styles.paginationItemActive}
        paginationStyleItemInactive={styles.paginationItemInactive}
        showPagination
        data={screens}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View
              style={{ width: Dimensions.width.size100, alignItems: 'center' }}
            >
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.content}>
              <Typography variant="heading2" style={{ textAlign: 'center' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" style={styles.subtitle}>
                {item.subtitle}
              </Typography>
            </View>
          </View>
        )}
      />
      <Button
        variant="contained"
        color="primary"
        title={swipeIndex === screens.length - 1 ? 'GET STARTED' : 'NEXT'}
        style={{ button: styles.button }}
        onPress={onNextPress}
      />
    </View>
  );
};

const onboardingImageHeight = Platform.select({
  ios: Dimensions.height.size52,
  android: Dimensions.height.size50,
  default: Dimensions.height.size50,
});

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Dimensions.height.size4,
    backgroundColor: Colors.white,
  },
  pagination: {
    position: 'absolute',
    top: onboardingImageHeight + Spacing.vertical.size56 - 10,
  },
  paginationItem: {
    backgroundColor: Colors.white,
    padding: 0,
    margin: 0,
    marginHorizontal: 3,
    width: 12,
    height: 12,
  },
  paginationItemActive: {
    backgroundColor: Colors.primary50,
  },
  paginationItemInactive: {
    backgroundColor: Colors.lighGray,
  },
  item: {
    alignItems: 'center',
    gap: Spacing.vertical.size56 - 10 + 20,
  },
  image: {
    width: Dimensions.width.size95,
    height: onboardingImageHeight,
  },
  button: {
    width: Dimensions.width.size50,
    marginBottom: Spacing.vertical.size28,
  },
  content: {
    alignItems: 'center',
    gap: 15,
  },
  subtitle: {
    width: Dimensions.width.size60,
    textAlign: 'center',
    fontSize: moderateScale(15),
  },
});

export default Onboarding;
