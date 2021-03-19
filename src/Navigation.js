import React, { Component } from "react";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";

import HomeScreen from "./screens/Home/HomeScreen";
import DetailedScreen from "./screens/Detailed/DetailedScreen";
import MyOrdersScreen from "./screens/Order/MyOrdersScreen";

const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <>
        <Stack.Navigator 
            screenOptions={{ 
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
          <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
          
        </Stack.Navigator>
      </>
    );
  }
}

export default Navigation;