import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Erro = () => 
    <View>
        <Text style={styles.texto}>ERRROOU</Text>
    </View>

const styles = StyleSheet.create({
    texto:{
        color: 'red',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }
})