import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from '../components'

const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={[styles.login, styles.margin]}>
            <Input
                placeHolder="user@email.com"
                value={userName}
                style={[styles.input, styles.margin]}
                onChangeText={(v: string) => setUserName(v)}
            />
            <Input
                placeHolder="***********"
                value={password}
                password={true}
                style={[styles.input, styles.margin]}
                onChangeText={(v: string) => setPassword(v)}
            />
            <Button
                title="Login"
                styleButton={[styles.btnLogin, styles.margin]}
                styleTitle={styles.titleBtnLogin}
                onPress={() => console.log("teste")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        marginLeft: '25%',
        justifyContent: 'center',
        width: '50%'
    },
    input: {
        width: '100%',
    },
    btnLogin: {
        width: '45%'
    },
    titleBtnLogin: {

    },
    margin: {
        margin: '1%'
    }
})

export default LoginScreen