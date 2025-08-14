import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { FontAwesome as FontAwesomeIcon } from '@expo/vector-icons';

import useBlockBackPress from 'hooks/use-block-back-press';

import Typography from 'components/Typography';
import Input from 'components/Input';

import UsernameIcon from 'svgs/username.svg';
import PasswordIcon from 'svgs/password.svg';
import PinPatternIcon from 'svgs/pin-pattern.svg';
import FaceIdIcon from 'svgs/face-id.svg';

import { moderateScale } from 'utils/styles';
import useFormState from 'hooks/use-form-state';
import { Colors, Dimensions, Spacing } from 'styles/index';
import Button from 'components/Button';

import Auth from 'containers/Auth';


import { router } from 'expo-router';

const iconSize = moderateScale(18);

const Login = (props: any) => {
  console.log("login")
  const [showPassword, setShowPassword] = useState(true);
  const { values, handleChange } = useFormState({ username: '', password: '' });

  useBlockBackPress();
  return (
    <Auth
      title="Login to your account"
      subtitle="Enter your username & password to continue"
      style={{ container: styles.container }}
    >
      <View>
        <Input
          placeholder="Username"
          keyboardType="default"
          autoCapitalize="none"
          value={values.username}
          key="username"
          onChangeText={handleChange('username')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          InputLeftElement={<UsernameIcon width={iconSize} height={iconSize} />}
        />

        <Input
          placeholder="Password"
          keyboardType="default"
          autoCapitalize="none"
          key="password"
          value={values.password}
          onChangeText={handleChange('password')}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.textInput}
          secureTextEntry={showPassword}
          InputLeftElement={<PasswordIcon width={iconSize} height={iconSize} />}
          InputRightElement={
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
              <FontAwesomeIcon
                name={showPassword ? 'eye' : 'eye-slash'}
                color={Colors.gray}
                size={iconSize}
              />
            </TouchableOpacity>
          }
        />
        <Button
          variant="contained"
          color="primary"
          title="LOGIN"
          style={{ button: styles.button }}
          onPress={() => {
            console.log("login router")
            router.replace('dashboard');
            // props.navigation.navigate(NAVIGATORS.CORE, {
            //   screen: NAVIGATORS.DASHBOARD,
            //   params: { screen: SCREENS.DASHBOARD },
            // });
          }}
        />
      </View>
      <View style={styles.separator}>
        <View style={styles.line} />
        <Typography variant="body3" style={{ fontWeight: 'bold' }}>
          Biometric Login
        </Typography>
        <View style={styles.line} />
      </View>
      <View style={styles.biometrics}>
        <TouchableOpacity style={styles.biometricItem}>
          <PinPatternIcon
            width={moderateScale(25)}
            height={moderateScale(25)}
          />
          <Typography variant="body3">PIN/Pattern</Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biometricItem}>
          <FaceIdIcon width={moderateScale(25)} height={moderateScale(25)} />
          <Typography variant="body3">Face ID</Typography>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', gap: 2 }}>
        <Typography variant="body3" style={{ fontWeight: '600' }}>
          No account yet?
        </Typography>
        <TouchableOpacity onPress={() => router.push('signup')}>
          <Typography variant="body3" style={styles.signupHere}>
            Signup here
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.termsAndPrivacy}>
        <Typography
          variant="caption1"
          style={{ textDecorationLine: 'underline' }}
        >
          Terms Conditions
        </Typography>
        <Typography variant="caption1">&</Typography>
        <Typography
          variant="caption1"
          style={{ textDecorationLine: 'underline' }}
        >
          Privacy Policy.
        </Typography>
      </View>
    </Auth>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.height.size100,
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: Spacing.horizontal.size20,
    alignItems: 'center',
  },
  textInput: {
    paddingLeft: Spacing.horizontal.size20,
  },
  button: {
    marginVertical: Spacing.vertical.size4,
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray,
  },
  separator: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: Spacing.vertical.size16,
    alignItems: 'center',
  },
  biometrics: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: Spacing.vertical.size12,
    paddingBottom: Spacing.vertical.size32,
  },
  biometricItem: {
    paddingVertical: Spacing.vertical.size12,
    borderWidth: 1,
    flex: 1,
    borderColor: Colors.gray,
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  termsAndPrivacy: {
    flexDirection: 'row',
    flex: 1,
    gap: 5,
    bottom: Spacing.vertical.size28,
    position: 'absolute',
  },
  signupHere: {
    color: Colors.primary50,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary50,
  },
});



export default Login;
