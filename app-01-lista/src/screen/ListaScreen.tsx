import React from 'react';
import { View } from 'react-native';
import axios from 'axios'

import { Lista } from '../components/Lista'
import { Pessoa } from '../models'
import { NavigationParams, NavigationScreenProp, NavigationState, } from 'react-navigation'

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  dados: Array<Pessoa>
}

export default class ListaScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      dados: []
    }
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=50')
      .then(response => {
        const { results } = response.data
        const lista = results.map((item: any) => {
          return {
            idPessoa: item.login.uuid,
            nome: item.name.first,
            sobrenome: item.name.last,
            email: item.email,
            telefone: item.phone,
            endereco: item.location.street.name,
            nacionalidade: item.nat,
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
        <Lista
          lista={this.state.dados}
        />
      </View>
    );
  }
}