import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components'

const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Input placeHolder="user@email.com" value={userName} onChangeText={(v: string) => setUserName(v)} />
            <Input placeHolder="***********" value={password} password={true} onChangeText={(v: string) => setPassword(v)} />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default LoginScreen