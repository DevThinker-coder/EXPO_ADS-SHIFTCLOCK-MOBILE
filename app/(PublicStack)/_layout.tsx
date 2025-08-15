import { Stack } from 'expo-router';
const PublicStackLayout = () => {
  return (
      <Stack
        initialRouteName="login"
        screenOptions={{ 
          title: "Login",
        }} 
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="signupSuccessful" options={{ headerShown: false }} />
      </Stack>
  );
};

export default PublicStackLayout;
