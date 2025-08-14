import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { usePathname } from 'expo-router';

const useBlockBackPress = () => {
  const pathname = usePathname();

  useEffect(() => {
    const backHandleSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // If we're on the login screen, exit the app when back is pressed
        if (pathname === '/login') {
          BackHandler.exitApp();
        }
        return false;
      },
    );
    
    return () => {
      backHandleSubscription.remove();
    };
  }, [pathname]);
};

export default useBlockBackPress;
