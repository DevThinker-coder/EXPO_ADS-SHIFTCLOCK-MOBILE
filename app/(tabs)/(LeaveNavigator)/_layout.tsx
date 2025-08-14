import { Stack } from "expo-router";

const LeaveLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="leaveRequests" />
      <Stack.Screen name="applyLeave" />
      <Stack.Screen name="viewLeaveRequest" />
    </Stack>
  );
};
export default LeaveLayout;