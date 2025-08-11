import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import DatePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import type { DocumentPickerResult } from 'expo-document-picker';

import DocumentPicker from 'expo-document-picker';

import useFormState from 'hooks/use-form-state';
import Input from 'components/Input';

import Typography from 'components/Typography';
import { Colors } from 'styles';
import Select from 'components/Select';

import UploadDocumentIcon from 'assets/svgs/upload-document.svg';
import { moderateScale } from 'utils/styles';
import Button from 'components/Button';

import styles from './styles';
import type { ApplyLeaveScreen } from './apply-leave.types';

const selectStyle = {
  viewContainer: styles.selectContainer,
  inputAndroid: styles.selectInput,
  inputIOS: styles.selectInput,
  inputAndroidContainer: styles.selectInputAndroidContainer,
  iconContainer: styles.selectIconContainer,
  inputIOSContainer: styles.selectInputIOSContainer,
};

const selectTimeItems = Array(24)
  .fill(0)
  .map((_, i) => {
    const hour = i % 12;
    const ampm = i < 12 ? 'AM' : 'PM';
    return {
      label: `${hour === 0 ? 12 : hour}:00 ${ampm}`,
      value: `${hour === 0 ? 12 : hour}:00 ${ampm}`,
      key: `${hour === 0 ? 12 : hour}:00 ${ampm}`,
    };
  });

type FormState = {
  type: string;
  cause: string;
  startDate: Date;
  endDate: Date;
  information: string;
  startTime: string;
  endTime: string;
};

type DatePickerInfo = {
  field: Extract<keyof FormState, `${string}Date`>;
  date: Date;
};

type Documents = Array<DocumentPickerResult> | null;

const ApplyLeave: ApplyLeaveScreen = () => {
  const { values, handleChange } = useFormState<FormState>({
    type: 'Casual Leave',
    cause: 'Trip to Hometown',
    startDate: new Date(),
    endDate: new Date(),
    information: '',
    startTime: '10:00 AM',
    endTime: '9:00 PM',
  });

  const [, setDocuments] = useState<Documents>(null);
  const [open, setOpen] = useState(false);

  const [datePickerInfo, setDatePickerInfo] = useState<DatePickerInfo>({
    field: 'startDate',
    date: new Date(),
  });

  const handleOpenDatePicker =
    (field: Extract<keyof typeof values, `${string}Date`>) => () => {
      setDatePickerInfo({
        field,
        date: values[field],
      });
      setOpen(true);
    };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        multiple: true,
        copyToCacheDirectory: true,
        type: ['application/pdf'],
      });
      setDocuments([result]);
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Input
        label="Type"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        value={values.type}
        onChangeText={handleChange('type')}
        key="type"
      />
      <Input
        label="Cause"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        value={values.cause}
        onChangeText={handleChange('cause')}
        key="cause"
      />
      <View style={styles.dateRow}>
        <TouchableOpacity
          touchSoundDisabled
          activeOpacity={1}
          onPress={handleOpenDatePicker('startDate')}
          style={{ flex: 1 }}
        >
          <Input
            label="Start Date"
            containerStyle={[styles.inputContainer, styles.dateInputContainer]}
            textInputStyle={styles.textInput}
            value={format(values.startDate, 'dd MMM yyyy')}
            key="startDate"
            editable={false}
            onPressIn={handleOpenDatePicker('startDate')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          touchSoundDisabled
          activeOpacity={1}
          onPress={handleOpenDatePicker('endDate')}
          style={{ flex: 1 }}
        >
          <Input
            label="End Date"
            containerStyle={[styles.inputContainer, styles.dateInputContainer]}
            textInputStyle={styles.textInput}
            value={format(values.endDate, 'dd MMM yyyy')}
            key="endDate"
            editable={false}
            onPressIn={handleOpenDatePicker('endDate')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.timeRow}>
        <Typography variant="heading3">Time</Typography>
        <View style={styles.timeContainer}>
          <Select
            style={selectStyle}
            iconColor={Colors.black}
            items={selectTimeItems}
            value={values.startTime}
            onValueChange={(value) => handleChange('startTime')(value)}
          />
          <Select
            style={selectStyle}
            iconColor={Colors.black}
            items={selectTimeItems}
            value={values.endTime}
            onValueChange={(value) => handleChange('endTime')(value)}
          />
        </View>
      </View>

      <Input
        placeholder="Additional Information"
        multiline
        numberOfLines={10}
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        textAlignVertical="top"
        fieldStyle={styles.additionalInformationField}
        value={values.information}
        onChangeText={handleChange('information')}
      />

      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={1}
        style={styles.documentPickerBtn}
        onPress={handleDocumentPicker}
      >
        <UploadDocumentIcon
          width={moderateScale(42)}
          height={moderateScale(42)}
        />
        <Typography variant="body3" style={styles.documentPickerBtnText}>
          Upload Document
        </Typography>
      </TouchableOpacity>

      <Button
        variant="contained"
        title="APPLY FOR LEAVE"
        color="primary"
        style={{ button: styles.applyBtn }}
      />

      <DatePicker
        value={datePickerInfo.date}
        onChange={(event, selectedDate) => {
          if (selectedDate) {
            handleChange(datePickerInfo.field)(selectedDate);
            setOpen(false);
          }
        }}
        mode="date"
        display="default"
      />
    </KeyboardAwareScrollView>
  );
};

export default ApplyLeave;
