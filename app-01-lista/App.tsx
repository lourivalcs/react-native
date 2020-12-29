import React from 'react';
import { render } from 'react-dom';
import { Text, View } from 'react-native';

import Header from './src/components/Header'
import { Lista, Dado } from './src/components/Lista'

const arrayDados: Array<Dado> = [
  {
    id: 0,
    valor: "Teste 00"
  },
  {
    id: 1,
    valor: "Teste 01"
  },
  {
    id: 2,
    valor: "Teste 02"
  },
  {
    id: 3,
    valor: "Teste 03"
  }
]
export default function App() {
  return (
    <View>
      <Header texto="APP 01 LISTA" />
      <Lista lista={arrayDados} />
    </View>
  );
}