import AsyncStorage from "@react-native-async-storage/async-storage";
import { ONBOARDING_COMPLETE } from "constants/storage";
import { Redirect, Stack } from "expo-router";
import { useStorage } from "hooks/use-storage";
import { useEffect, useState } from "react";
export default function RootLayout() {
  const [isOnboarded,setIsOnboarded]=useState(false)
  const {getItem}=useStorage()
  const _startHandler=async()=>{
    const onboardingDone=await getItem(ONBOARDING_COMPLETE)
    setIsOnboarded(onboardingDone)
  }
  useEffect(()=>{
    _startHandler()
  },[])

  return (
    <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="(OnboardStack)" options={{ headerShown: false }} />
          <Stack.Screen name="(PublicStack)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}