import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props: any) => (
    <View style={style.view}>
        <Text style={style.text}>{props.texto}</Text>
    </View>
)

const style = StyleSheet.create({
    view: {
        alignItems: 'center',
        backgroundColor: '#3a8c2d',
        marginTop: '5.5%',
        padding: '2%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Header
