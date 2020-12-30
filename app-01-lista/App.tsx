import React from 'react';
import { View } from 'react-native';
import axios from 'axios'

import Header from './src/components/Header'
import { Lista } from './src/components/Lista'
import { Pessoa } from './src/models'

interface IProps {
}

interface IState {
  dados: Array<Pessoa>
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      dados: []
    }
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        const lista = results.map((item: any) => {
          return {
            idPessoa: item.login.uuid,
            nome: item.name.first,
            sobrenome: item.name.last,
            urlImagemMini: item.picture.thumbnail,
            urlImagemGrande: item.picture.large
          }
        })
        this.setState({
          dados: lista
        })
      })
  }

  render() {
    return (
      <View>
        <Header texto="APP 01 LISTA" />
        <Lista lista={this.state.dados} />
      </View>
    );
  }
}