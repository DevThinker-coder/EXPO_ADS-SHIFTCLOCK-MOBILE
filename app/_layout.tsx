import { SplashScreen, Stack } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "utils/authContext";
// SplashScreen.preventAutoHideAsync()
function StackLayout() {
  const { isOnboarded, isLoggedIn } = useContext(AuthContext)
  console.log("isLoggedIn", isLoggedIn)
  console.log("isOnboarded", isOnboarded)
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hideAsync()
  //   }, 3000)
  // }, [])

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(OnboardStack)" options={{ headerShown: false }} />
      <Stack.Screen name="(PublicStack)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}