import { View } from 'react-native';
import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import PhoneInput from 'components/PhoneInput';
import useFormState from 'hooks/use-form-state';

import styles from './styles';

const EditProfile = () => {
  const { values, handleChange } = useFormState({
    companyName: 'XYZ (Pvt)Ltd.',
    branchLocation: 'East Block Branch',
    employeeID: 'MN 100045',
    fullName: 'John Doe',
    emailAddress: 'johndoe@email.com',
    mobileNumber: '+923001234567',
  });

  return (
    <View style={styles.container}>
      <Input
        label="Company Name"
        containerStyle={[styles.inputContainer, styles.disableInput]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldStyle}
        value={values.companyName}
        editable={false}
        key="companyName"
      />

      <Input
        label="Branch Location"
        containerStyle={[styles.inputContainer, styles.disableInput]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldStyle}
        value={values.branchLocation}
        key="branchLocation"
        editable={false}
      />

      <Input
        label="Employee ID"
        containerStyle={[styles.inputContainer, styles.disableInput]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldStyle}
        value={values.employeeID}
        key="employeeID"
        editable={false}
      />

      <Input
        label="Full Name"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldStyle}
        value={values.fullName}
        onChangeText={handleChange('fullName')}
        key="fullName"
        editable
      />

      <Input
        label="Email Address"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldStyle}
        value={values.emailAddress}
        onChangeText={handleChange('emailAddress')}
        key="emailAddress"
      />

      <PhoneInput
        key="mobileNumber"
        value={values.mobileNumber}
        onChangeText={handleChange('mobileNumber')}
      />

      <Button
        variant="contained"
        color="primary"
        title="UPDATE PROFILE"
        style={{ button: { marginTop: 'auto' } }}
      />
    </View>
  );
};

export default EditProfile;
