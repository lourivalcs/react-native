import React from 'react'
import { ListRenderItem, StyleSheet } from 'react-native'
import { ListaItem } from './ListaItem'
import { IPessoa } from '../interfaces'
import { FlatList } from 'react-native-gesture-handler'

export const Lista = (props: { lista: Array<IPessoa> }) => {
    const renderItem: ListRenderItem<IPessoa> = ({ item }) => (
        <ListaItem dados={item} />
    );
    return (
        <FlatList
            style={styles.lista}
            data={props.lista}
            renderItem={renderItem}
            keyExtractor={(item: any, index) => item.idPessoa}
        />
    )
}

const styles = StyleSheet.create({
    lista: {
        backgroundColor: '#FFF',
        margin: '3%',
        borderColor: '#000'
    }
})