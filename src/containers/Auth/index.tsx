import { View } from 'react-native';
import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Typography from 'components/Typography';
import GoBack from 'components/GoBack';
import LogoSvg from 'assets/svgs/logo.svg';
import { Dimensions } from 'styles';

import styles from './styles';
import type { AuthContainer } from './auth.types';

const Auth: AuthContainer = (props) => {
  const { top } = useSafeAreaInsets();

  const { title, subtitle, children, ...rest } = props;

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: top },
        rest?.style?.container,
      ]}
    >
      {rest.allowBack && <GoBack />}
      <View style={styles.logo}>
        <LogoSvg
          width={Dimensions.width.size50}
          height={Dimensions.height.size14}
        />
      </View>
      <View style={styles.header}>
        <Typography variant="heading2" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="body3">{subtitle}</Typography>
      </View>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default Auth;
