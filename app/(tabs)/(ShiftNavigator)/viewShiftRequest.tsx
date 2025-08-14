import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import useFormState from 'hooks/use-form-state';
import Input from 'components/Input';
import RequestButton from 'components/BigButton';
import Typography from 'components/Typography';
import { moderateScale } from 'utils/styles';
import { Colors, Dimensions, Layouts, Spacing } from 'styles';
import ApproveIcon from 'assets/svgs/approve.svg';
import RejectIcon from 'assets/svgs/reject.svg';


const ViewShiftRequest = () => {
  const { values } = useFormState({
    fullName: 'John Doe',
    employeeId: 'MN 100045',
    projectName: 'West 105 Site',
    projectAddress: '13th Street 47 W 13th St, New York, NY',
    startDate: '9 Aug 2023',
    endDate: '15 Aug 2023',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do adipiscing elit.',
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
        label="Employee ID"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.employeeId}
        editable={false}
        key="employeeId"
      />
      <Input
        label="Project Name"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.projectName}
        editable={false}
        key="projectName"
      />
      <Input
        label="Project Address"
        containerStyle={[styles.inputContainer]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.projectAddress}
        editable={false}
        key="projectAddress"
      />
      <Input
        label="Description"
        labelStyle={styles.descriptionLabel}
        containerStyle={[
          styles.inputContainer,
          { marginBottom: Spacing.vertical.size12 },
        ]}
        textInputStyle={styles.textInput}
        fieldStyle={styles.fieldInput}
        value={values.description}
        editable={false}
        multiline
        numberOfLines={10}
        textAlignVertical="top"
        key="description"
      />
      <View style={[styles.fullCard]}>
        <Typography variant="body3" style={styles.itemHeading}>
          Shift Type
        </Typography>
        <View style={styles.fullCardRight}>
          <Feather name="sun" size={moderateScale(14)} />
          <Typography variant="body3" style={styles.fullCardRightText}>
            Day Shift
          </Typography>
        </View>
      </View>

      <View style={styles.dateRow}>
        <View style={[styles.dateCard]}>
          <Typography variant="caption1" style={{ color: Colors.primary }}>
            Start Date
          </Typography>
          <Typography variant="body3" style={styles.dateText}>
            9 Aug 2023
          </Typography>
        </View>
        <View style={[styles.dateCard]}>
          <Typography variant="caption1" style={{ color: Colors.primary }}>
            End Date
          </Typography>
          <Typography variant="body3" style={styles.dateText}>
            15 Aug 2023
          </Typography>
        </View>
      </View>

      <View style={[styles.fullCard]}>
        <Typography variant="body3" style={styles.itemHeading}>
          Break Length
        </Typography>
        <View style={styles.fullCardRight}>
          <SimpleLineIcons name="cup" size={moderateScale(14)} />
          <Typography variant="body3" style={styles.fullCardRightText}>
            30min
          </Typography>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.buttonRow}>
        <RequestButton
          title="Reject"
          icon={
            <RejectIcon width={moderateScale(40)} height={moderateScale(40)} />
          }
          style={{ backgroundColor: Colors.red }}
        />
        <RequestButton
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
    marginBottom: 3,
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
  descriptionLabel: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    paddingVertical: Spacing.vertical.size4,
  },
  fullCard: {
    width: '100%',
    backgroundColor: Colors.white,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginBottom: Spacing.vertical.size12,
    paddingVertical: Spacing.vertical.size20,
    paddingHorizontal: Spacing.horizontal.size20,
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeading: {
    color: Colors.primary,
    fontWeight: '400',
    fontSize: moderateScale(15),
  },
  fullCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fullCardRightText: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  dateCard: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginBottom: Spacing.vertical.size12,
    borderRadius: moderateScale(15),
    paddingVertical: Spacing.vertical.size12,
    paddingHorizontal: Spacing.horizontal.size20,
    gap: 0,
    width:
      Dimensions.width.size50 - Spacing.horizontal.globalHorizontalPadding - 5,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  dateText: {
    lineHeight: moderateScale(20),
    fontWeight: '500',
    verticalAlign: 'middle',
  },
  descriptionCard: {
    ...Layouts.card,
    paddingVertical: Spacing.vertical.size16,
    paddingHorizontal: Spacing.horizontal.size20,
    borderRadius: moderateScale(15),
    flexDirection: 'column',
    gap: 10,
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

export default ViewShiftRequest;
