import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';

import WelcomeScreen from './src/screens/Welcome'
import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Lainnya from './src/screens/Lainnya'
import DetailpageScreen from './src/screens/Detailpage';
import TambahhewanScreen from './src/screens/Tambahhewan'
import Account from './src/screens/Account'
import Notification from './src/screens/Notification';
import Message from './src/screens/Message';
import SuccessScreen from './src/screens/Success'
import Tulispesan from './src/screens/Tulisanpesan';
import Edit from './src/screens/Edit';
import Searchbar from './src/screens/Searchbar';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FDCB5A',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFF',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recomended"
        component={Searchbar}
        options={{
          tabBarLabel: 'Recomended',
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="message-processing-outline"
        component={Message}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message-processing-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="bell"
        component={Notification}
        options={{
          tabBarLabel: 'Bell',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='Dashboard' component={RootHome} />
        <Stack.Screen name='Lainnya' component={Lainnya}/>
        <Stack.Screen name='DetailpageScreen' component={DetailpageScreen}/>
        <Stack.Screen name='TambahhewanScreen' component={TambahhewanScreen}/>
        <Stack.Screen name='SuccessScreen' component={SuccessScreen}/>
        <Stack.Screen name='Tulisanpesan' component={Tulispesan}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='Edit' component={Edit}/>
        <Stack.Screen name='Searchbar' component={Searchbar}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App