import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableWithoutFeedback, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import type {
  LeaveNavigatorParamList,
  ScreenOptionsFn,
} from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { ApplyLeave, Leaves, ViewLeaveRequest, LeaveRequests } from 'screens';
import { moderateScale } from 'utils/styles';
import AddFileIcon from 'assets/svgs/add-file.svg';

import useNavigationHeader from 'navigation/use-navigation-header';
import { Colors } from 'styles';

const LeaveStack = createStackNavigator<LeaveNavigatorParamList>();

type LeaveScreenOptions = ScreenOptionsFn<typeof LeaveStack.Screen>;

const LeaveNavigator = () => {
  const header = useNavigationHeader();

  const options = useCallback<LeaveScreenOptions>(
    ({ navigation }) => ({
      headerTitle: 'Leaves',
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(SCREENS.LEAVE_REQUESTS)}
          >
            <Feather name="eye" size={moderateScale(25)} color={Colors.white} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(SCREENS.APPLY_LEAVE)}
          >
            <AddFileIcon width={moderateScale(25)} height={moderateScale(25)} />
          </TouchableWithoutFeedback>
        </View>
      ),
      ...header.primary,
    }),
    [header.primary],
  );

  return (
    <LeaveStack.Navigator initialRouteName={SCREENS.LEAVES}>
      <LeaveStack.Screen
        name={SCREENS.LEAVES}
        component={Leaves}
        key={SCREENS.LEAVES}
        options={options}
      />
      <LeaveStack.Screen
        name={SCREENS.APPLY_LEAVE}
        component={ApplyLeave}
        key={SCREENS.APPLY_LEAVE}
        options={{
          headerTitle: 'Apply Leave',
          ...header.secondary,
        }}
      />
      <LeaveStack.Screen
        name={SCREENS.LEAVE_REQUESTS}
        component={LeaveRequests}
        key={SCREENS.LEAVE_REQUESTS}
        options={{
          headerTitle: 'Leave Requests',
          ...header.secondary,
        }}
      />
      <LeaveStack.Screen
        name={SCREENS.VIEW_LEAVE_REQUEST}
        component={ViewLeaveRequest}
        key={SCREENS.VIEW_LEAVE_REQUEST}
        options={{
          headerTitle: 'View Leave Request',
          ...header.secondary,
        }}
      />
    </LeaveStack.Navigator>
  );
};

export default LeaveNavigator;
