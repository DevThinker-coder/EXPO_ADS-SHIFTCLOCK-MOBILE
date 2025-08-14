/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CameraType, launchCameraAsync, UIImagePickerPresentationStyle } from 'expo-image-picker';

import  images  from 'images';

import CameraIcon from 'assets/svgs/camera.svg';
import UserIcon from 'assets/svgs/user.svg';
import { moderateScale } from 'utils/styles';
import Typography from 'components/Typography';

import ChevronLeftIcon from 'assets/svgs/chevron-left.svg';
import BellSolidIcon from 'assets/svgs/bell-solid.svg';
import SecurityIcon from 'assets/svgs/security.svg';
import LanguageIcon from 'assets/svgs/language.svg';
import AboutUsIcon from 'assets/svgs/about-us.svg';
import LogoutIcon from 'assets/svgs/logout.svg';

import { Colors, Dimensions, Layouts, Spacing } from 'styles/index';




import { router } from 'expo-router';

const iconSize = moderateScale(20);
const chevronSize = moderateScale(15);

const ProfileMenuOptions = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: <UserIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: any) => {
      // navigation.navigate(SCREENS.EDIT_PROFILE);
      router.push('/editProfile');
    },
  },
  {
    id: 2,
    title: 'Notifications',
    icon: <BellSolidIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: any) => {
      // navigation.navigate(SCREENS.NOTIFICATION_SETTINGS);
      router.push('/notificationSettings');
    },
  },
  {
    id: 3,
    title: 'Securtiy',
    icon: <SecurityIcon width={iconSize} height={iconSize} />,
    onPress: () => {},
  },
  {
    id: 4,
    title: 'Language',
    icon: <LanguageIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: any) => {
      // navigation.navigate(SCREENS.LANGUAGE);
      router.push('/language');
    },
  },
  {
    id: 5,
    title: 'About',
    icon: <AboutUsIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: any) => {
      // navigation.navigate(SCREENS.ABOUT);
      router.push('/about');
    },
  },
  {
    id: 6,
    title: 'Logout',
    icon: <LogoutIcon width={moderateScale(22)} height={moderateScale(22)} />,
    onPress: ({ navigation }: any) => {
      // navigation.navigate(SCREENS.LOGIN);
      router.push('/login');
    },
  },
];

const Profile = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const [image, setImage] = useState('');
  const capturePhoto = async () => {
    try {
      const cameraResult = await launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        cameraType: CameraType.front,
        presentationStyle: UIImagePickerPresentationStyle.FULL_SCREEN,
      });
      const asset = cameraResult?.assets?.[0];
      if (asset === undefined) return;
      setImage(asset.uri ?? '');
      // eslint-disable-next-line no-console
      console.log(cameraResult);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={[
        styles.container,
        { minHeight: Dimensions.height.size100 - top },
      ]}
    >
      <View style={styles.profileImageContainer}>
        <Image
          source={
            image !== ''
              ? {
                  uri: image,
                }
              : images.profilePicLg
          }
          resizeMode="contain"
          style={styles.profileImage}
        />

        <View style={styles.uploaderWrapper}>
          <TouchableOpacity style={styles.uploader} onPress={capturePhoto}>
            <CameraIcon width={iconSize} height={iconSize} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.user]}>
        <Typography variant="heading2" style={styles.name}>
          John Doe
        </Typography>
        <Typography variant="body3" style={{ opacity: 0.5 }}>
          MN 100045
        </Typography>
      </View>
      <View style={{ alignItems: 'center', gap: 3 }}>
        {ProfileMenuOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.card}
            onPress={() => option.onPress({ navigation })}
          >
            {option.icon}
            <Typography variant="body3">{option.title}</Typography>
            <View style={styles.chevronleft}>
              <ChevronLeftIcon width={chevronSize} height={chevronSize} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
  },
  profileImageContainer: {
    ...Layouts.centered,
    position: 'relative',
  },
  profileImage: {
    width: Dimensions.width.size40,
    height: Dimensions.width.size40,
    borderRadius: Dimensions.width.size40 / 2,
  },
  uploaderWrapper: {
    width: Dimensions.width.size11,
    height: Dimensions.width.size11,
    borderRadius: Dimensions.width.size11 / 2,
    position: 'absolute',
    right: Dimensions.width.size23,
    bottom: 2,
    backgroundColor: Colors.white,
    ...Layouts.centered,
  },
  uploader: {
    backgroundColor: Colors.primary50,
    width: Dimensions.width.size10,
    height: Dimensions.width.size10,
    borderRadius: Dimensions.width.size10 / 2,
    ...Layouts.centered,
  },
  user: {
    ...Layouts.centered,
    paddingVertical: Spacing.vertical.size16,
  },
  name: { color: Colors.primary },
  card: {
    ...Layouts.card,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingLeft: Spacing.horizontal.size24,
    paddingRight: Spacing.horizontal.size20,
    paddingVertical: Spacing.vertical.size16,
  },
  chevronleft: { flex: 1, alignItems: 'flex-end' },
});

export default Profile;
