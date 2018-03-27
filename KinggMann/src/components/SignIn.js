import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from '../api/signIn';
import global from '../global/global';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn(){
        const {email, password } = this.state;
        signIn(email, password)
        .then(response => {
            global.onSignIn(response.user);
            this.props.goBackToMenu();
        })
        .catch(error => console.log(error));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Enter your email'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Enter your password'
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={() => this.onSignIn()}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
    },
    bigButton: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    buttonText: {
        fontFamily: 'Arial Black',
        fontWeight: '400',
        color: '#7f8c8d'
    }
})