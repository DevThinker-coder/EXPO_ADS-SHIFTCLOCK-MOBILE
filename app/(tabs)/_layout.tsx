import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E90FF',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(DashboardNavigator)"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(LeaveNavigator)"
        options={{
          title: 'Leave',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(ShiftNavigator)"
        options={{
          title: 'Shift',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="schedule" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(NotificationNavigator)"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}