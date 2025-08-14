import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import Button from 'components/Button';
import useFormState from 'hooks/use-form-state';
import LogoSvg from 'svgs/logo.svg';

import { router } from 'expo-router';
import { Spacing, Dimensions, Colors } from 'styles';
import { moderateScale } from 'utils/styles';
import DropdownPicker from 'components/DropdownPicker';

const companies = [
  {
    label: 'Omnifics.io',
    value: 'omnifics.io',
    key: 'omnifics.io',
  },
  {
    label: 'TechNova',
    value: 'technova',
    key: 'technova',
  },
  {
    label: 'InnoWorks',
    value: 'innoworks',
    key: 'innoworks',
  },
  {
    label: 'BluePeak Solutions',
    value: 'bluepeak',
    key: 'bluepeak',
  },
  {
    label: 'NextGen Labs',
    value: 'nextgen',
    key: 'nextgen',
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
  {
    label: 'Islamabad',
    value: 'islamabad',
    key: 'islamabad',
  },
  {
    label: 'Peshawar',
    value: 'peshawar',
    key: 'peshawar',
  },
  {
    label: 'Quetta',
    value: 'quetta',
    key: 'quetta',
  },
];


const Signup = () => {
  const { top } = useSafeAreaInsets();
  const [companyDropdownVisible, setCompanyDropdownVisible] = useState(false);
  const [branchDropdownVisible, setBranchDropdownVisible] = useState(false);
  
  const { values, handleChange } = useFormState({
    companyName: '',
    branchLocation: '',
    employeeID: '',
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
  });

  const getSelectedCompanyLabel = () => {
    const selected = companies.find(company => company.value === values.companyName);
    return selected ? selected.label : 'Select Company';
  };

  const getSelectedBranchLabel = () => {
    const selected = branchLocations.find(branch => branch.value === values.branchLocation);
    return selected ? selected.label : 'Select Branch';
  };



  return (
    <View style={[styles.container, { paddingTop: top }]}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color={Colors.black} />
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <LogoSvg
            width={Dimensions.width.size50}
            height={Dimensions.height.size14}
          />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Please enter your personal data</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          {/* Employee ID Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              value={values.employeeID}
              onChangeText={handleChange('employeeID')}
              placeholderTextColor={Colors.gray}
            />
          </View>

          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              placeholderTextColor={Colors.gray}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={values.emailAddress}
              onChangeText={handleChange('emailAddress')}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={Colors.gray}
            />
          </View>

          {/* Phone Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              value={values.mobileNumber}
              onChangeText={handleChange('mobileNumber')}
              keyboardType="phone-pad"
              placeholderTextColor={Colors.gray}
            />
          </View>

          {/* Company Name Select */}
          <View style={styles.selectOuterContainer}>
            <Text style={styles.selectLabel}>Company Name</Text>
            <TouchableOpacity
              style={styles.customDropdownButton}
              onPress={() => setCompanyDropdownVisible(true)}
            >
              <Text style={[
                styles.dropdownButtonText,
                { color: values.companyName ? Colors.black : Colors.gray }
              ]}>
                {getSelectedCompanyLabel()}
              </Text>
              <Ionicons name="chevron-down" size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>

          {/* Branch Location Select */}
          <View style={styles.selectOuterContainer}>
            <Text style={styles.selectLabel}>Branch Location</Text>
            <TouchableOpacity
              style={styles.customDropdownButton}
              onPress={() => setBranchDropdownVisible(true)}
            >
              <Text style={[
                styles.dropdownButtonText,
                { color: values.branchLocation ? Colors.black : Colors.gray }
              ]}>
                {getSelectedBranchLabel()}
              </Text>
              <Ionicons name="chevron-down" size={20} color={Colors.gray} />
            </TouchableOpacity>
          </View>

          {/* Signup Button - Always visible */}
          <Button
            variant="contained"
            color="primary"
            title="SIGNUP"
            style={{ button: styles.signupButton }}
            onPress={() => {
              router.push('signupSuccessful');
            }}
          />
        </View>
      </ScrollView>

      {/* Custom Dropdown Modals */}
      <DropdownPicker
        visible={companyDropdownVisible}
        onClose={() => setCompanyDropdownVisible(false)}
        data={companies}
        onSelect={handleChange('companyName')}
        title="Select Company"
      />

      <DropdownPicker
        visible={branchDropdownVisible}
        onClose={() => setBranchDropdownVisible(false)}
        data={branchLocations}
        onSelect={handleChange('branchLocation')}
        title="Select Branch Location"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size20,
    backgroundColor: Colors.white,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: Spacing.horizontal.size8,
    marginBottom: Spacing.vertical.size16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.vertical.size28,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: Spacing.vertical.size8,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Spacing.vertical.size8,
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: Colors.black,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    paddingBottom: Spacing.vertical.size40,
    flexGrow: 1,
  },
  formContainer: {
    gap: Spacing.vertical.size16,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: moderateScale(15),
    paddingHorizontal: Spacing.horizontal.size16,
    paddingVertical: Spacing.vertical.size16,
  },
  input: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  selectOuterContainer: {
    gap: Spacing.vertical.size8,
  },
  selectLabel: {
    fontSize: moderateScale(15),
    color: Colors.black,
    fontWeight: '500',
    marginLeft: Spacing.horizontal.size4,
  },
  customDropdownButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: moderateScale(15),
    paddingHorizontal: Spacing.horizontal.size16,
    paddingVertical: Spacing.vertical.size16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: moderateScale(15),
  },
  signupButton: {
    marginTop: Spacing.vertical.size20,
    width: '100%',
  },
});

export default Signup;
