import React from 'react'
// import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Home from '../Screen/Home';
import PrivateMessages from '../Screen/PrivateMessages';
import Signup from '../Screen/Signup';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PrivateMessages" component={PrivateMessages} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;