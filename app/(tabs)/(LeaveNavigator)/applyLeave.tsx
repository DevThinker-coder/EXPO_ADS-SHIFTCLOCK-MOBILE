import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';

import DatePicker from '@react-native-community/datetimepicker';

import { format } from 'date-fns';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import type { DocumentPickerResult } from 'expo-document-picker';

import DocumentPicker from 'expo-document-picker';

import useFormState from 'hooks/use-form-state';
import Input from 'components/Input';

import Typography from 'components/Typography';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import Select from 'components/Select';

import UploadDocumentIcon from 'assets/svgs/upload-document.svg';
import { moderateScale } from 'utils/styles';
import Button from 'components/Button';



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

const ApplyLeave = () => {

  const selectStyle = {
    viewContainer: styles.selectContainer,
    inputAndroid: styles.selectInput,
    inputIOS: styles.selectInput,
    inputAndroidContainer: styles.selectInputAndroidContainer,
    iconContainer: styles.selectIconContainer,
    inputIOSContainer: styles.selectInputIOSContainer,
  };


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
            onValueChange={(value:any) => handleChange('startTime')(value)}
          />
          <Select
            style={selectStyle}
            iconColor={Colors.black}
            items={selectTimeItems}
            value={values.endTime}
            onValueChange={(value:any) => handleChange('endTime')(value)}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
  },
  contentContainer: {
    width: '100%',
    paddingBottom: Spacing.vertical.size28,
    paddingTop: Spacing.vertical.size20,
  },
  inputContainer: {
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size16,
    marginBottom: Spacing.vertical.size4,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 10,
  },
  dateInputContainer: {
    width: Dimensions.width.size43,
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.vertical.size16,
    width: '100%',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
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
    borderRadius: moderateScale(8),
    paddingLeft: 0,
  },
  selectInputAndroidContainer: {
    paddingLeft: Spacing.horizontal.size8,
    paddingRight: Spacing.horizontal.size20,
    elevation: 0,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: moderateScale(8),
  },
  selectInputIOSContainer: {
    elevation: 0,
    borderWidth: 0,
    paddingLeft: Spacing.horizontal.size12,
    paddingRight: Spacing.horizontal.size12,
  },
  selectInput: { fontWeight: '400' },
  selectIconContainer: {
    right: Platform.select({ android: 2, ios: -10 }),
  },
  timeRow: {
    paddingVertical: Spacing.vertical.size16,
    paddingLeft: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
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
  documentPickerBtn: {
    width: '100%',
    // height: Dimensions.height.size12,
    paddingVertical: Spacing.vertical.size24,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.silver,
    ...Layouts.centered,
    marginVertical: Spacing.vertical.size8,
  },
  documentPickerBtnText: {
    color: `${Colors.black}33`,
    fontWeight: '500',
  },
  applyBtn: {
    marginTop: Spacing.vertical.size12,
  },
});

export default ApplyLeave;
