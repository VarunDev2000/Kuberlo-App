import React, { Component } from "react";
import { StyleSheet} from "react-native";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';

import colors from './config/colors';

import HomeScreen from "./screens/Home/HomeScreen";
import DetailedScreen from "./screens/Detailed/DetailedScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const iconSize = 23.5;

const Search = () => {
  return null
}

const Cart = () => {
  return null
}

const Offer = () => {
  return null
}

const Profile = () => {
  return null
}

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000"
        inactiveColor="#c9c9c9"
        labelPosition= 'beside-icon'
        barStyle={styles.bottomNavStyle}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon1 name="home" color={color} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Icon1 name="search" color={color} size={iconSize} />
            ),
            //tabBarBadge: 0,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="shoppingcart" color={color} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offer}
          options={{
            tabBarLabel: 'Offers',
            tabBarIcon: ({ color, size }) => (
              <Icon3   name="local-offer" color={color} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon4 name="user-o" color={color} size={iconSize} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

class Navigation extends Component {
  render() {
    return (
      <>
        <Stack.Navigator 
            screenOptions={{ 
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>

          <Stack.Screen name="Tabs" component={MyTabs} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailedScreen" component={DetailedScreen} />
          
        </Stack.Navigator>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavStyle: {
    backgroundColor: colors.bottomNavigationColor,
    paddingTop:8,
    paddingBottom:13,
    elevation:10,
  }
});

export default Navigation;