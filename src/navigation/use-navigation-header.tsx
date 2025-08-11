import React from 'react';
import type { StackNavigationOptions } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Dimensions, Spacing } from 'styles';
import { moderateScale } from 'utils/styles';

import BackWhiteIcon from 'assets/svgs/back-white.svg';

type UseNavigationHeader = () => Record<
  'primary' | 'secondary',
  Partial<StackNavigationOptions>
>;

const useNavigationHeader: UseNavigationHeader = () => {
  const { top } = useSafeAreaInsets();

  const primary: Partial<StackNavigationOptions> = {
    headerLeft: () => null,
    headerMode: 'screen',
    headerBackgroundContainerStyle: {
      backgroundColor: Colors.primary,
    },
    headerStyle: {
      backgroundColor: Colors.primary,
      height: top + Dimensions.height.size6,
    },
    headerLeftContainerStyle: {
      paddingLeft: Spacing.horizontal.size8,
    },
    headerTintColor: Colors.white,
    headerTitleAlign: 'left',
    headerTitleStyle: {
      fontSize: moderateScale(20),
    },
    headerRightContainerStyle: {
      paddingRight: Spacing.horizontal.size16,
      paddingBottom: Spacing.vertical.size4,
    },
    headerBackTitleVisible: false,
  };

  const secondary: Partial<StackNavigationOptions> = {
    headerBackImage: () => (
      <BackWhiteIcon width={moderateScale(18)} height={moderateScale(18)} />
    ),
    headerBackTitleVisible: false,
    headerMode: 'screen',
    headerBackgroundContainerStyle: {
      backgroundColor: Colors.primary,
    },
    headerStyle: {
      backgroundColor: Colors.primary,
      height: top + Dimensions.height.size6,
    },
    headerLeftContainerStyle: {
      paddingLeft: Spacing.horizontal.size16,
    },
    headerTintColor: Colors.white,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: moderateScale(20),
    },
    headerRightContainerStyle: {
      paddingRight: Spacing.horizontal.size16,
      paddingBottom: Spacing.vertical.size4,
    },
  };
  return { primary, secondary };
};

export default useNavigationHeader;
