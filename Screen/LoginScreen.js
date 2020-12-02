
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HeaderCustom from '../componentes/Header';
import { Container, Button, Text} from 'native-base';
import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component {

    async _signInWithGoogle() {

        try {
            const result = await Google.logInAsync({
                androidClientId: "329347674786-svd1e7mt1ka7ahnlu4j6eudvckbtkard.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                try {
                    this.setState({ photo: result.user.photoUrl });
                    this.props.onLogin();
                } catch (error) {
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render() {
        return (
            <Container>
                <HeaderCustom title="Login" boton={false} />
                <Image source={{ uri: 'https://i.imgur.com/WTpVkiV.png' }} style={{ height: 350, width: null, flex: 1 }} />
                <Container style={styles.boton}>
                    <Button style={{ alignSelf: 'center', padding: 15 }} large info onPress={() => this._signInWithGoogle()}>
                        <AntDesign name="google" size={24} color="white" />
                        <Text>Login with Google</Text>
                    </Button>
                </Container>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    boton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
