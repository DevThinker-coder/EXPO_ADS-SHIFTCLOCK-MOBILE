import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import type {
  ScreenOptionsFn,
  ShiftNavigatorParamList,
} from 'navigation/types';
import { SCREENS } from 'constants/screen-names';
import { Shifts, ApplyShift, ViewShiftRequest, ShiftRequests } from 'screens';
import useNavigationHeader from 'navigation/use-navigation-header';
import CalendarIcon from 'assets/svgs/calendar.svg';
import { moderateScale } from 'utils/styles';
import { Colors } from 'styles';

const ShiftStack = createStackNavigator<ShiftNavigatorParamList>();

type ShiftScreenOptions = ScreenOptionsFn<typeof ShiftStack.Screen>;

const ShiftNavigator = () => {
  const header = useNavigationHeader();

  const options = useCallback<ShiftScreenOptions>(
    ({ navigation }) => ({
      ...header.primary,
      headerTitle: 'Manage Shifts',
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.SHIFT_REQUESTS)}
          >
            <Feather name="eye" size={moderateScale(25)} color={Colors.white} />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(SCREENS.APPLY_SHIFT)}
          >
            <CalendarIcon
              width={moderateScale(25)}
              height={moderateScale(25)}
            />
          </TouchableWithoutFeedback>
        </View>
      ),
    }),
    [header.primary],
  );

  return (
    <ShiftStack.Navigator>
      <ShiftStack.Screen
        name={SCREENS.SHIFTS}
        component={Shifts}
        key={SCREENS.SHIFTS}
        options={options}
      />
      <ShiftStack.Screen
        name={SCREENS.APPLY_SHIFT}
        component={ApplyShift}
        key={SCREENS.APPLY_SHIFT}
        options={{
          ...header.secondary,
          headerTitle: 'Apply Shift',
        }}
      />
      <ShiftStack.Screen
        name={SCREENS.SHIFT_REQUESTS}
        component={ShiftRequests}
        key={SCREENS.SHIFT_REQUESTS}
        options={{
          ...header.secondary,
          headerTitle: 'Shift Requests',
        }}
      />
      <ShiftStack.Screen
        name={SCREENS.VIEW_SHIFT_REQUEST}
        component={ViewShiftRequest}
        key={SCREENS.VIEW_SHIFT_REQUEST}
        options={{
          ...header.secondary,
          headerTitle: 'View Shift Request',
        }}
      />
    </ShiftStack.Navigator>
  );
};

export default ShiftNavigator;
