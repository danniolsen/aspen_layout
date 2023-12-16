import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen, AspenScreen } from "../screens";

type RootStackParamList = {
  Intro: undefined;
  Aspen: { userId: string };
};

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
