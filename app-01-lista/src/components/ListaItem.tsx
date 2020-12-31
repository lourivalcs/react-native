import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Pessoa } from '../models'
import { alteraParaMaiusculo } from '../util'


export const ListaItem = (props: { dados: Pessoa }) => {
    const navigation = useNavigation();
    const { dados } = props
    const nomeCompleto = alteraParaMaiusculo(`${dados.nome} ${dados.sobrenome}`)
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ListaItemDetalhe', { dadosPessoa: dados })}>
            <View style={styles.linha}>
                <Image style={styles.imagem} source={{ uri: dados.urlImagemMini }} />
                <Text style={styles.texto}>{nomeCompleto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linha: {
        backgroundColor: '#FFF',
        height: 70,
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