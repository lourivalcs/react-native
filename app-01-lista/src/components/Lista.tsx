import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListaItem } from './ListaItem'
import { Pessoa } from '../models'

export const Lista = (props: { lista: Array<Pessoa> }) =>
    <View style={styles.lista}>
        {
            props.lista.map(item => {
                return <ListaItem key={item.idPessoa} dados={item} />
            })
        }
    </View>

const styles = StyleSheet.create({
    lista: {
        backgroundColor: '#FFF',
        margin: '3%',
        borderColor: '#000'
    }
})