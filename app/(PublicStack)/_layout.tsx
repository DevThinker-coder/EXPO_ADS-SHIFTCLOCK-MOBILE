import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
const PublicStackLayout = () => {
  return (
      <Stack
        initialRouteName="splash"
        screenOptions={{ 
          title: "Splash",
        }} 
      >
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="signupSuccessful" options={{ headerShown: false }} />
      </Stack>
  );
};

export default PublicStackLayout;
