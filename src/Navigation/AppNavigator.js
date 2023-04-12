import React, {useEffect} from 'react';
import {Text, View, Platform, Image, Appearance, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DynamicAppStyles} from '../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';
import Orders from '../Screens/Orders';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import ExploreAll from '../Screens/ExploreAll';
import Details from '../Screens/Details';
import OrderSummary from '../Screens/OrderSummary';
import Schedule from '../Screens/Schedule';
import EditProfile from '../Screens/EditProfile';
import ChangeNumber from '../Screens/ChangeNumber';
import Registration from '../Screens/Registration';
import JoinUs from '../Screens/JoinUs';

const COLOR_SCHEME = Appearance.getColorScheme();

const StackScreens = [
  {name: 'Login', component: Login, options: {headerShown: false}},
  {name: 'BottomTab', component: BottomTab, options: {headerShown: false}},
  {name: 'Home', component: Home, options: {headerShown: false}},
  {name: 'Dashboard', component: Dashboard, options: {headerShown: false}},
  {name: 'Orders', component: Orders, options: {headerShown: false}},
  {name: 'Profile', component: Profile, options: {headerShown: false}},
  {name: 'Search', component: Search, options: {headerShown: false}},
  {name: 'ExploreAll', component: ExploreAll, options: {headerShown: false}},
  {name: 'Details', component: Details, options: {headerShown: false}},
  {
    name: 'OrderSummary',
    component: OrderSummary,
    options: {headerShown: false},
  },
  {name: 'Schedule', component: Schedule, options: {headerShown: false}},
  {name: 'EditProfile', component: EditProfile, options: {headerShown: false}},
  {
    name: 'ChangeNumber',
    component: ChangeNumber,
    options: {headerShown: false},
  },
  {
    name: 'Registration',
    component: Registration,
    options: {headerShown: false},
  },
  {
    name: 'JoinUs',
    component: JoinUs,
    options: {headerShown: false},
  },
];

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        {StackScreens.map(item => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
        tabBarInactiveTintColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
        tabBarLabelStyle: {
          fontSize: DynamicAppStyles.fontSize.xmsmall,
          fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
