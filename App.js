import * as React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import InstagramMain from "./screens/InstagramMain";
import InstagramAddImage from "./screens/InstagramAddImage";
import InstagramProfileEdit from "./screens/InstagramProfileEdit";

import EditProfileScreen from "./screens/EditProfileScreen";
import AssetSearch from "./screens/AssetSearch";
import NewAssetSearch from "./screens/NewAssetSearch";

import NewAssetSearch2 from "./screens/NewAssetSearch2";


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const Stack= createStackNavigator();

  return (
    <NavigationContainer>
      
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
            name="InstagramMain"
            component={InstagramMain}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="InstagramAddImage"
            component={InstagramAddImage}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="InstagramProfileEdit"
            component={InstagramProfileEdit}
            options={{ headerShown: false }}
          /> */}
            {/* <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
            options={{ headerShown: false }}
          /> */}
           {/* <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          /> */}
              {/* <Stack.Screen
            name="SearchScreen"
            component={AssetSearch}
            options={{ headerShown: false }}
          /> */}
             {/* <Stack.Screen
            name="NewAssetSearch"
            component={NewAssetSearch}
            options={{ headerShown: false }}
          /> */}
             <Stack.Screen
            name="NewAssetSearch2"
            component={NewAssetSearch2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    
    </NavigationContainer>
  );
};

export default App;
