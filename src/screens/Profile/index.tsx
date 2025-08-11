/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CameraType, launchCameraAsync, UIImagePickerPresentationStyle } from 'expo-image-picker';

import { images } from 'assets';

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

import { Dimensions } from 'styles';

import { SCREENS } from 'constants/screen-names';

import styles from './styles';
import type { ProfileProps, ProfileScreen } from './profile.types';

const iconSize = moderateScale(20);
const chevronSize = moderateScale(15);

const ProfileMenuOptions = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: <UserIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: Pick<ProfileProps, 'navigation'>) => {
      navigation.navigate(SCREENS.EDIT_PROFILE);
    },
  },
  {
    id: 2,
    title: 'Notifications',
    icon: <BellSolidIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: Pick<ProfileProps, 'navigation'>) => {
      navigation.navigate(SCREENS.NOTIFICATION_SETTINGS);
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
    onPress: ({ navigation }: Pick<ProfileProps, 'navigation'>) => {
      navigation.navigate(SCREENS.LANGUAGE);
    },
  },
  {
    id: 5,
    title: 'About',
    icon: <AboutUsIcon width={iconSize} height={iconSize} />,
    onPress: ({ navigation }: Pick<ProfileProps, 'navigation'>) => {
      navigation.navigate(SCREENS.ABOUT);
    },
  },
  {
    id: 6,
    title: 'Logout',
    icon: <LogoutIcon width={moderateScale(22)} height={moderateScale(22)} />,
    onPress: ({ navigation }: any) => {
      navigation.navigate(SCREENS.LOGIN);
    },
  },
];

const Profile: ProfileScreen = ({ navigation }) => {
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

export default Profile;
