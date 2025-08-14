import { Stack } from "expo-router";

const ShiftLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="shifts" />
      <Stack.Screen name="applyShift" />
      <Stack.Screen name="shiftRequests" />
      <Stack.Screen name="viewShiftRequest" />
    </Stack>
  );
};
export default ShiftLayout;