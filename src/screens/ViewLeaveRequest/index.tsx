import { FlatList, Image, ScrollView, View } from 'react-native';
import React from 'react';

import Input from 'components/Input';
import useFormState from 'hooks/use-form-state';
import { moderateScale } from 'utils/styles';
import { Colors } from 'styles';
import ApproveIcon from 'assets/svgs/approve.svg';
import RejectIcon from 'assets/svgs/reject.svg';

import Select from 'components/Select';
import Typography from 'components/Typography';

import type { SelectProps } from 'components/Select/select.types';

import { images } from 'assets';

import BigButton from 'components/BigButton';

import type { ViewLeaveRequestScreen } from './view-leave-request.types';
import styles from './styles';

const timesData = Array(24)
  .fill(0)
  .map((_, i) => ({
    label: `${i % 12}:00 ${i < 12 ? 'AM' : 'PM'}`,
    value: i,
    key: i,
  }));

const selectStyles = {
  viewContainer: styles.selectContainer,
  inputAndroid: styles.selectInput,
  inputIOS: styles.selectInput,
  inputAndroidContainer: styles.selectInputAndroidContainer,
  iconContainer: styles.selectIconContainer,
  inputIOSContainer: styles.selectInputIOSContainer,
} satisfies SelectProps['style'];

const ViewLeaveRequest: ViewLeaveRequestScreen = () => {
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

export default ViewLeaveRequest;
