



import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { SplashScreen } from "../screens/splash-screen";
const Stack = createNativeStackNavigator();
export const AppContainer = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name= "Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};