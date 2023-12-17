import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-Light": require("./assets/Montserrat/Montserrat-Thin.ttf")
  });

  const onLayoutRootView = useCallback(
    async () => {
      if (fontsLoaded) {
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 100);
      }
    },
    [fontsLoaded]
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar />
      <MainNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
