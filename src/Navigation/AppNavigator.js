import React, { useEffect } from "react";
import { Text, View, Platform,Image,Appearance } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DynamicAppStyles } from "../theme";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Dashboard from "../Screens/Dashboard";
import Orders from "../Screens/Orders";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";

const COLOR_SCHEME = Appearance.getColorScheme();

const StackScreens = [
  { name: "Login", component: Login, options: { headerShown: false } },
  { name: "BottomTab", component: BottomTab, options: { headerShown: false } },
  { name: "Home", component: Home, options: { headerShown: false } },
  { name: "Dashboard", component: Dashboard, options: { headerShown: false } },
  { name: "Orders", component: Orders, options: { headerShown: false } },
  { name: "Profile", component: Profile, options: { headerShown: false } },
  { name: "Search", component: Search, options: { headerShown: false } },


];

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"BottomTab"}
        >
          {StackScreens.map((item) => (
            <Stack.Screen
              name={item.name}
              component={item.component}
              options={item.options}
            />
          ))}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTab () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor:
          DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
        tabBarInactiveTintColor:
          DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
        tabBarLabelStyle: {
          fontSize: DynamicAppStyles.fontSize.xmsmall,
          fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              color={
                focused
                  ? DynamicAppStyles.colorSet[COLOR_SCHEME].Black
                  : DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
              }
              size={DynamicAppStyles.fontSize.content}
            />
          ),
         
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="search"
                color={
                  focused
                    ? DynamicAppStyles.colorSet[COLOR_SCHEME].Black
                    : DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
                }
                size={DynamicAppStyles.fontSize.content}
              />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
                name="order-bool-descending-variant"
                color={
                  focused
                    ? DynamicAppStyles.colorSet[COLOR_SCHEME].Black
                    : DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
                }
                size={DynamicAppStyles.fontSize.content}
              />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
                name="user-circle"
                color={
                  focused
                    ? DynamicAppStyles.colorSet[COLOR_SCHEME].Black
                    : DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
                }
                size={DynamicAppStyles.fontSize.content}
              />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


