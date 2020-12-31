import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'

import ListaScreen from './src/screen/ListaScreen'
import ListaItemDetalheScreen from './src/screen/ListaItemDetalheScreen'

import RotaParametroLista from './src/RouterParameters'

const Stack = createStackNavigator<RotaParametroLista>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: style.header,
          headerTitleStyle: style.title
        }}>
        <Stack.Screen name="Lista" component={ListaScreen} options={{ title: 'APP 01 LISTA' }} />
        <Stack.Screen
          name="ListaItemDetalhe"
          component={ListaItemDetalheScreen}
          options={({ navigation, route }) => {
            const { nome } = route.params.dadosPessoa
            return (
              {
                title: nome,
                headerTitleStyle: {
                  fontSize: 20,
                  fontWeight: 'bold'
                }
              })
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#3a8c2d',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexGrow: 1,
    textAlign: 'center'
  }
})