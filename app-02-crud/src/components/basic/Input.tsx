import React from 'react'
import { TextInput, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

export const Input = (props: { placeHolder?: string, value?: string, password?: boolean, onChangeText: any, style?: StyleProp<ViewStyle> }) => {
    const { onChangeText, password = false, placeHolder, style, value } = props

    return (
        <View>
            <TextInput
                placeholder={placeHolder}
                value={value}
                style={[styles.input, style]}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderWidth: 1,
        margin: '1%',
        borderRadius: 5,
        fontSize: 20,
        paddingLeft: 5
    }
})