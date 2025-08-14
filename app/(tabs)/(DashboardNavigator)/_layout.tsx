import { Stack } from 'expo-router';
const DashboardLayout = () => {
  return (
      <Stack
        initialRouteName="dashboard"
        screenOptions={{ 
          title: "Dashboard",
        }} 
      >
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="attendance" />
        <Stack.Screen name="attendanceReport" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="editProfile" />
        <Stack.Screen name="notificationSettings" />
        <Stack.Screen name="about" />
      </Stack>
  );
};

export default DashboardLayout;
