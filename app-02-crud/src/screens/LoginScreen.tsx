import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Input, Button } from '../components'
import firebase from 'firebase'
import { Google } from '../enums/Google'

const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const firebaseConfig = {
        /* colocar o config de novo */
    }

    useEffect(() => {
        if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig)
    }, [])

    const errorMessage = (errorCode: string) => {
        switch (errorCode) {
            case Google.InvalidEmail:
                return 'E-mail incorreto'
            case Google.UserNotFound:
                return 'Usuário não encontrado'
            case Google.WrongPassword:
                return 'Senha incorreta'
            case Google.UserDisabled:
                return 'Usuário desabilitado'
            default:
                return 'Erro desconhecido'
        }
    }

    const createUser = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(userName, password)
            .then(user => {
                setMessage('Usuário criado')
            })
            .catch(error => {
                setMessage(errorMessage(error.code))
            })
            .finally(() => { setLoading(false) })
    }

    const alertNewUser = () => {
        return Alert.alert(
            'Usuário não encontrado',
            'Cadastrar novo usuário com dados informados?',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Não cadastrar')
                },
                {
                    text: 'Sim',
                    onPress: createUser
                }
            ]
        )
    }

    const tryLogin = () => {
        setLoading(true)
        firebase
            .auth()
            .signInWithEmailAndPassword(userName, password)
            .then(user => {
                setMessage('Usuário autenticado')
            })
            .catch(error => {
                if (Google.UserNotFound == error.code)
                    alertNewUser()
                else
                    setMessage(errorMessage(error.code))
            })
            .finally(() => { setLoading(false) })
    }

    return (
        <View style={[styles.login, styles.margin]}>
            <Text>{message}</Text>
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
                loading={loading}
                onPress={tryLogin}
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
        width: '100%'
    },
    titleBtnLogin: {

    },
    margin: {
        margin: '5%'
    }
})

export default LoginScreen