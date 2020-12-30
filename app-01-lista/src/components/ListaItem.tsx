import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Pessoa } from '../models'
import { alteraParaMaiusculo } from '../util'


export const ListaItem = (props: { dados: Pessoa }) => {
    const { dados } = props
    const nomeCompleto = alteraParaMaiusculo(`${dados.nome} ${dados.sobrenome}`)
    return (
        <View style={styles.linha}>
            <Image style={styles.imagem} source={{ uri: dados.urlImagemMini }} />
            <Text style={styles.texto}>{nomeCompleto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    linha: {
        backgroundColor: '#FFF',
        height: '15%',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: '1%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    texto: {
        fontSize: 15,
        paddingLeft: '5%',
        flex: 5
    },
    imagem: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: '5%',
        borderRadius: 50
    }
})