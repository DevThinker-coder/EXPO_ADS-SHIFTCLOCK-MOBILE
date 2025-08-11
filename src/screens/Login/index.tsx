import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import useBlockBackPress from 'hooks/use-block-back-press';

import Typography from 'components/Typography';
import Input from 'components/Input';

import UsernameIcon from 'assets/svgs/username.svg';
import PasswordIcon from 'assets/svgs/password.svg';
import PinPatternIcon from 'assets/svgs/pin-pattern.svg';
import FaceIdIcon from 'assets/svgs/face-id.svg';

import { moderateScale } from 'utils/styles';
import useFormState from 'hooks/use-form-state';
import { Colors } from 'styles';
import Button from 'components/Button';

import Auth from 'containers/Auth';

import { NAVIGATORS, SCREENS } from 'constants/screen-names';

import styles from './styles';

import type { LoginScreen } from './login.types';

const iconSize = moderateScale(18);

const Login: LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const { values, handleChange } = useFormState({ username: '', password: '' });

  useBlockBackPress(navigation);
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
            navigation.navigate(NAVIGATORS.CORE, {
              screen: NAVIGATORS.DASHBOARD,
              params: { screen: SCREENS.DASHBOARD },
            });
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
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
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

export default Login;
