import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type Dado = {
    id: number
    valor: string
}

export const Lista = (props: { lista: Array<Dado> }) =>
    <View>
        {
            props.lista.map(item => {
                return <Text key={item.id}>{item.valor}</Text>
            })
        }
    </View>

