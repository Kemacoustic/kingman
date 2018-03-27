import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import register from '../api/register';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    removeEmail(){
        this.setState({
            email: ''
        });
    }

    onSuccess(){
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
              {text: 'OK', onPress: this.props.gotoSignIn()},
            ],
            { cancelable: false }
          )
    }

    onFail(){
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
              {text: 'OK', onPress: () => console.log('Ask me later pressed')},
            ],
            { cancelable: false }
          )
    }

    registerUser() {
        const { name, email, password } = this.state;
        register(email, name, password)
            .then(response => {
                if(response === 'THANH_CONG'){
                    return this.onSuccess();
                } 
            });
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Enter your name'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Enter your email'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Enter your password'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput underlineColorAndroid='transparent'
                    style={inputStyle} placeholder='Re-enter your password'
                    secureTextEntry
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
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