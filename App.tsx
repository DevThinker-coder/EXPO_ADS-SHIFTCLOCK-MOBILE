import LocalesProvider from "context/locales";
import useCurrentLocale from "hooks/use-current-locale";
import { Provider } from "jotai";
import Navigation from "navigation/index";
import {  StatusBar, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "store/index";

function App() {
  const { selectedLocale } = useCurrentLocale();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar
      backgroundColor="transparent"
      barStyle="dark-content"
      translucent
    />
    <SafeAreaProvider>
      <Provider store={store}>
        <LocalesProvider defaultLocale="en" locale={selectedLocale}>
          <Navigation />
        </LocalesProvider>
      </Provider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.rnstorybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
