import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
const PublicStackLayout = () => {
  return (
      <Stack
        initialRouteName="index"
        screenOptions={{ 
          title: "Onboarding",
        }} 
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
};

export default PublicStackLayout;
