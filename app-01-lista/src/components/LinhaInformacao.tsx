import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const LinhaInformacao = (props: { label: string, texto: string | undefined }) => {
    const { label, texto = "" } = props
    return (
        <View style={styles.linha}>
            <Text style={[
                styles.texto,
                styles.textoLabel,
                label?.length > 8 ? styles.textoLongo : null
            ]}>{label}:</Text>
            <Text style={[
                styles.texto,
                styles.textoValor,
                texto.length > 18 ? styles.textoLongo : null
            ]}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row'
    },
    texto: {
        fontSize: 20
    },
    textoLabel: {
        fontWeight: 'bold',
        paddingLeft: '2%',
        flex: 2
    },
    textoValor: {
        paddingLeft: '2%',
        flex: 4
    },
    textoLongo: {
        fontSize: 17
    }
})