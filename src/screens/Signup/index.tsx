import { View } from 'react-native';
import React from 'react';

import Auth from 'containers/Auth';
import Input from 'components/Input';

import Button from 'components/Button';
import useFormState from 'hooks/use-form-state';
import Select from 'components/Select';

import { SCREENS } from 'constants/screen-names';

import PhoneInput from 'components/PhoneInput';

import styles from './styles';
import type { SignupScreen } from './signup.types';

const companies = [
  {
    label: 'Omnifics.io',
    value: 'omnifics.io',
    key: 'omnifics.io',
  },
];

const branchLocations = [
  {
    label: 'Karachi',
    value: 'karachi',
    key: 'karachi',
  },
  {
    label: 'Lahore',
    value: 'lahore',
    key: 'lahore',
  },
];

const Signup: SignupScreen = ({ navigation }) => {
  const { values, handleChange } = useFormState({
    companyName: '',
    branchLocation: '',
    employeeID: '',
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
  });

  return (
    <Auth
      title="Create Account"
      subtitle="Please enter your personal data"
      style={{ container: styles.container }}
      allowBack
    >
      <View style={{ gap: 2, flex: 1 }}>
        <Select
          placeholder={{
            key: 'companyName',
            value: null,
            label: 'Company Name',
          }}
          items={companies}
          key="companyName"
          onValueChange={handleChange('companyName')}
        />
        <Select
          placeholder={{
            key: 'branchLocation',
            value: null,
            label: 'Branch Location',
          }}
          items={branchLocations}
          key="branchLocation"
          onValueChange={handleChange('branchLocation')}
        />
        <Input
          placeholder="Employee ID"
          key="employeeID"
          value={values.employeeID}
          onChangeText={handleChange('employeeID')}
          containerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Full Name"
          containerStyle={styles.inputContainer}
          key="fullName"
          value={values.fullName}
          onChangeText={handleChange('fullName')}
        />
        <Input
          placeholder="Email Address"
          containerStyle={styles.inputContainer}
          key="emailAddress"
          value={values.emailAddress}
          onChangeText={handleChange('emailAddress')}
        />
        <PhoneInput
          key="mobileNumber"
          value={values.mobileNumber}
          onChangeText={handleChange('mobileNumber')}
        />
        <Button
          variant="contained"
          color="primary"
          title="SIGNUP"
          style={{ button: styles.formBtn }}
          onPress={() => {
            navigation.navigate(SCREENS.SIGNUP_SUCCESSFUL);
          }}
        />
      </View>
    </Auth>
  );
};

export default Signup;
