import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen, AspenScreen, DetailsScreen } from "../screens";
import type { RootStackParamList } from "../../types";


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
            animation: "simple_push",
            headerShown: false,
            presentation: "modal",
            fullScreenGestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
