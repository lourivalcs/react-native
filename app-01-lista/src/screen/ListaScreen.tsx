import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import axios from 'axios'

import { Lista, Erro } from '../components'
import { IPessoa } from '../interfaces'
import { NavigationParams, NavigationScreenProp, NavigationState, } from 'react-navigation'

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  dados: Array<IPessoa>
  loading: boolean
  error: boolean
}

export default class ListaScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      dados: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
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
          dados: lista,
          loading: false
        })
      })
      .catch(error => {
        this.setState({ loading: false, error: true })
      })
  }

  render() {
    const { dados, loading, error } = this.state
    return (
      <View style={styles.view} >
        { loading && <ActivityIndicator size="large" color="#000" />}
        { (!loading && !error) && <Lista lista={dados} />}
        { error && <Erro />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center'
  }
})