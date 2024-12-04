import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen, AspenScreen, DetailsScreen } from "../screens";
import { RootStackParamList } from "../../types";
import BackButton from "../components/BackButton";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false, animation: "fade" }}
        />

        <Stack.Screen
          name="Aspen"
          component={AspenScreen}
          options={{ animation: "fade", headerShown: false }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerLeft: () => <BackButton canGoBack variant="dark" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 100,
  },
});
