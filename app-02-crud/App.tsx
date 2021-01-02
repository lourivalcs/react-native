import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import RouterParamsList from './src/RouterParamsList'

import LoginScreen from './src/screens/LoginScreen'

const Screens = createStackNavigator<RouterParamsList>()

export default function App() {
  return (
    <NavigationContainer>
      <Screens.Navigator>
        <Screens.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true }} />
      </Screens.Navigator>
    </NavigationContainer>
  );
}