import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import backIcon from '../media/appicon/back_white.png';
import logoIcon from '../media/appicon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class AuthenticationScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarVisible: false
    };
    constructor(props){
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    gotoSignIn(){
        this.setState({
            isSignIn: true
        })
    }

    signIn(){
        this.setState({
            isSignIn:true
        })
    }

    signUp(){
        this.setState({
            isSignIn: false
        })
    }

    goBackToMenu(){
        this.props.navigation.goBack()
    }

    render() {
        const { container, titleStyle, containerTitle, iconStyle, controlStyle, signInStyle,
            signUpStyle, activeStyle, inactiveStyle} = styles;

        const {isSignIn} = this.state;
        
        const mainJSX = this.state.isSignIn ? <SignIn goBackToMenu={this.goBackToMenu.bind(this)}/> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)}/>;

        return (
            <View style={container}>
                <View style={containerTitle}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={backIcon} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={logoIcon} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle}
                    onPress={() => this.signIn()}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle}
                    onPress={() => this.signUp()}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9',
        padding: 20,
        justifyContent: 'space-between',
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'Arial Black',
        fontSize: 20,
    },
    iconStyle: {
        height: 28,
        width: 28,
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf:'stretch'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    activeStyle: {
        color: '#2980b9'
    },
    inactiveStyle: {
        color: '#7f8c8d'
    },
})