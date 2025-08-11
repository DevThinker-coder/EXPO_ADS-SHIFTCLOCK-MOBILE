import {
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { images } from 'assets';
import { Dimensions, Spacing } from 'styles';
import Overview from 'components/Overview';
import StatsCard from 'components/StatsCard';

import { SCREENS } from 'constants/screen-names';
import permissions from 'utils/permissions';

import styles from './styles';
import type { DashboardScreen } from './dashboard.types';

const Dashboard: DashboardScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    permissions
      .checkNotification()
      .then(permissions.checkLocation)
      .then(permissions.checkCamera);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          onPress={() => navigation.navigate(SCREENS.PROFILE)}
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

export default Dashboard;
