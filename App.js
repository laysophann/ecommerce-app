import * as React from "react";

import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{ drawerPosition: "right" }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
