import { FlatList, Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import Input from 'components/Input';
import useFormState from 'hooks/use-form-state';
import { moderateScale } from 'utils/styles';
import { Colors, Dimensions, Spacing } from 'styles';
import ApproveIcon from 'assets/svgs/approve.svg';
import RejectIcon from 'assets/svgs/reject.svg';

import Select from 'components/Select';
import Typography from 'components/Typography';

import type { SelectProps } from 'components/Select/select.types';

import { images } from 'assets';

import BigButton from 'components/BigButton';



const timesData = Array(24)
  .fill(0)
  .map((_, i) => ({
    label: `${i % 12}:00 ${i < 12 ? 'AM' : 'PM'}`,
    value: i,
    key: i,
  }));


const ViewLeaveRequest = () => {

  const selectStyles = {
    viewContainer: styles.selectContainer,
    inputAndroid: styles.selectInput,
    inputIOS: styles.selectInput,
    inputAndroidContainer: styles.selectInputAndroidContainer,
    iconContainer: styles.selectIconContainer,
    inputIOSContainer: styles.selectInputIOSContainer,
  } satisfies SelectProps['style'];

  
  
  const { values } = useFormState({
    fullName: 'John Doe',
    companyName: 'XYZ (Pvt)Ltd.',
    employeeId: 'MN 100045',
    type: 'Casual Leave',
    cause: 'Tripe to Hometown',
    startDate: '9 Aug 2023',
    endDate: '15 Aug 2023',
    information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Input
        label="Full Name"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.fullName}
        editable={false}
        key="fullName"
      />
      <Input
        label="Company Name"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.companyName}
        editable={false}
        key="companyName"
      />
      <Input
        label="Employee ID"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.employeeId}
        editable={false}
        key="employeeId"
      />
      <Input
        label="Type"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.type}
        editable={false}
        key="type"
      />
      <Input
        label="Cause"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.cause}
        editable={false}
        key="cause"
      />
      <View style={styles.dateContainer}>
        <Input
          label="Start Date"
          containerStyle={[styles.inputContainer, styles.date]}
          textInputStyle={styles.textInput}
          fieldStyle={styles.fieldInput}
          value={values.startDate}
          editable={false}
          key="startDate"
        />
        <Input
          label="End Date"
          containerStyle={[styles.inputContainer, styles.date]}
          textInputStyle={styles.textInput}
          fieldStyle={styles.fieldInput}
          value={values.endDate}
          editable={false}
          key="endDate"
        />
      </View>

      <View style={styles.timingsSection}>
        <Typography variant="heading3">Time</Typography>
        <View style={styles.timingsContainer}>
          <Select
            style={selectStyles}
            iconColor={Colors.black}
            items={timesData}
            value={10}
            onValueChange={() => {}}
            disabled
          />
          <Select
            style={selectStyles}
            iconColor={Colors.black}
            items={timesData}
            value={21}
            onValueChange={() => {}}
            disabled
          />
        </View>
      </View>

      <Input
        label="Additional Information"
        labelStyle={styles.additionalInformationLabel}
        multiline
        numberOfLines={10}
        textAlignVertical="top"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.additionalInformationField}
        value={values.information}
        editable={false}
      />

      <FlatList
        data={[images.exampleDoc, images.exampleDoc, images.exampleDoc]}
        horizontal
        renderItem={() => (
          <View style={styles.docContainer}>
            <Image
              source={images.exampleDoc}
              style={styles.doc}
              resizeMode="contain"
            />
          </View>
        )}
        style={styles.docsList}
      />
      <View style={styles.line} />

      <View style={styles.buttonRow}>
        <BigButton
          title="Reject"
          icon={
            <RejectIcon width={moderateScale(40)} height={moderateScale(40)} />
          }
          style={{ backgroundColor: Colors.red }}
        />
        <BigButton
          title="Approve"
          icon={
            <ApproveIcon width={moderateScale(40)} height={moderateScale(40)} />
          }
          style={{ backgroundColor: Colors.primary }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: Spacing.vertical.size20,
    paddingBottom: Spacing.vertical.size28,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size4,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:
      Dimensions.width.size100 - Spacing.horizontal.globalHorizontalPadding * 2,
  },
  date: {
    width: '48.5%',
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontWeight: '400',
  },
  fieldInput: {
    fontWeight: '400',
    color: Colors.black,
  },
  timingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  timingsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
    borderRadius: moderateScale(10),
    paddingRight: Platform.select({
      ios: Spacing.horizontal.size12,
      android: 0,
    }),
    paddingVertical: Platform.select({
      ios: Spacing.vertical.size12,
      android: 0,
    }),
    width: 'auto',
    marginVertical: 0,
    paddingLeft: 0,
  },
  selectInput: {
    fontWeight: '400',
  },
  selectInputAndroidContainer: {
    elevation: 8,
    shadowOpacity: 0.1,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size8,
    paddingRight: Spacing.horizontal.size20,
  },
  selectInputIOSContainer: {
    elevation: 0,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size12,
    paddingRight: Spacing.horizontal.size12,
  },
  selectIconContainer: {
    right: Platform.select({ android: 2, ios: -10 }),
  },
  additionalInformationField: {
    ...Platform.select({
      ios: {
        minHeight: Dimensions.height.size25,
      },
      default: {},
    }),
    padding: 0,
    margin: 0,
  },
  additionalInformationLabel: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    paddingVertical: Spacing.vertical.size4,
  },
  docsList: {
    flexDirection: 'row',
    width: Dimensions.width.size100,
    paddingVertical: Spacing.vertical.size16,
    left: Spacing.horizontal.globalHorizontalPadding,
  },
  docContainer: {
    marginRight: Spacing.horizontal.size8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  doc: {
    width: Dimensions.width.size35,
    height: Dimensions.width.size35,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: Spacing.vertical.size16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 20,
    paddingVertical: Spacing.vertical.size16,
  },
});

export default ViewLeaveRequest;
