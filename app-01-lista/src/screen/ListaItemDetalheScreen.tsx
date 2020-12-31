import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import RotaParametroLista from '../RouterParameters'
import { LinhaInformacao } from '../components/LinhaInformacao'


type Props = StackScreenProps<RotaParametroLista, 'ListaItemDetalhe'>;


export default class ListaItemDetalheScreen extends React.Component<Props> {
    render() {
        const { dadosPessoa } = this.props.route.params
        return (
            <View style={styles.container}>
                <Image style={styles.imagem} source={{ uri: dadosPessoa.urlImagemGrande }} />
                <View style={styles.boxTexto}>
                    <LinhaInformacao label="Nome" texto={`${dadosPessoa.nome} ${dadosPessoa.sobrenome}`} />
                    <LinhaInformacao label="Email" texto={dadosPessoa.email} />
                    <LinhaInformacao label="Telefone" texto={dadosPessoa.telefone} />
                    <LinhaInformacao label="Endereço" texto={dadosPessoa.endereco} />
                    <LinhaInformacao label="Nacionalidade" texto={dadosPessoa.nacionalidade} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    imagem: {
        aspectRatio: 1
    },
    boxTexto: {
        marginTop: '1%',
        borderStyle: 'solid',
        borderWidth: 1
    },
    linha: {
        flexDirection: 'row'

    },
    texto: {
        fontSize: 20
    },
    textoLabel: {
        fontWeight: 'bold',
        paddingLeft: '2%'
    },
    textoValor: {
        paddingLeft: '2%'
    }
})