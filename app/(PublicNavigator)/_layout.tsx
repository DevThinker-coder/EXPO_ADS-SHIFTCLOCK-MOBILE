import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
const PublicNavigatorLayout = () => {
  return (
      <Stack
        initialRouteName="splash"
        screenOptions={{ 
          title: "Splash",
        }} 
      >
        <Stack.Screen name="splash" />
      </Stack>
  );
};

export default PublicNavigatorLayout;
