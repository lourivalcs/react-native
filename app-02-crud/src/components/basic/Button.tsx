import React from 'react'
import { ActivityIndicator, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

/**
     * Custom Button with TouchableOpacity
     * @param title Text of button
     * @param onPress Event click
     * @param styleButton styles customize for button
     * @param styleTitle => customize title of button
*/

export const Button = (props: { title: string, onPress: any, styleButton?: StyleProp<ViewStyle>, styleTitle?: StyleProp<ViewStyle>, loading?: boolean }) => {
    const { title, onPress, styleButton, styleTitle, loading = false } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, styleButton]}>
            <Text style={[styles.title, styleTitle]}>
                {!loading && title}
            </Text>

            {loading &&
                <View style={styles.loading}>
                    <ActivityIndicator color="#000" size="large" />
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#11b5d6',
        paddingTop: 5,
        borderRadius: 5,
        height: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    loading: {
        marginTop: -30
    }
})