import {
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import  images  from 'images';
import { Colors, Dimensions, Spacing } from 'styles/index';
import Overview from 'components/Overview';
import StatsCard from 'components/StatsCard';





const Dashboard = () => {
  console.log("dashboard")
  const { top } = useSafeAreaInsets();

  // useEffect(() => {
  //   permissions
  //     .checkNotification()
  //     .then(permissions.checkLocation)
  //     .then(permissions.checkCamera);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: top + Spacing.vertical.size8 },
      ]}
    >
      <View style={styles.background} />
      <View style={styles.header}>
        <Image
          source={images.logoSmall}
          resizeMode="contain"
          style={styles.smallLogo}
        />
        <TouchableWithoutFeedback
          onPress={() => router.push('/profile')}
        >
          <Image
            source={images.profilePic}
            resizeMode="contain"
            style={styles.profilePic}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.content}>
        <Overview />
        <View
          style={{
            gap:
              Dimensions.width.size100 -
              Dimensions.width.size42 * 2 -
              Spacing.horizontal.globalHorizontalPadding * 2,
            marginVertical: Spacing.vertical.size4,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <StatsCard color="green" value={75} title="Present" />
            <StatsCard color="yellow" value={50} title="Absent" />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <StatsCard color="primary50" value={90} title="On Time" />
            <StatsCard color="red" value={10} title="Late" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size28,
  },
  background: {
    backgroundColor: Colors.primary,
    height: Dimensions.height.size35,
    width: Dimensions.width.size100 + Dimensions.width.size32,
    zIndex: -1000,
    position: 'absolute',
    top: -Dimensions.height.size10,
    left: -(Dimensions.width.size32 / 2),
    borderRadius:
      (Dimensions.width.size100 +
        Dimensions.width.size32 +
        Dimensions.height.size52) /
      2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallLogo: {
    width: Dimensions.width.size25,
    height: Dimensions.height.size5,
  },
  profilePic: {
    width: Dimensions.width.size10,
    height: Dimensions.height.size5,
    alignItems: 'flex-end',
  },
  content: {
    paddingVertical: Spacing.vertical.size36,
  },
});

export default Dashboard;