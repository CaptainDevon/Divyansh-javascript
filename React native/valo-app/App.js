import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlaygroundOne from "./screens/PlaygroundOne";
import PlaygroundTwo from "./screens/PlaygroundTwo";
import PlaygroundThree from "./screens/PlaygroundThree";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false , animation:'fade'}}
        initialRouteName="First"
      >
        <Stack.Screen name="First" component={PlaygroundOne}/>
        <Stack.Screen name="Second" component={PlaygroundTwo}/>
        <Stack.Screen name="Third" component={PlaygroundThree}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
