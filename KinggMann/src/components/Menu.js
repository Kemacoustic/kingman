import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import global from '../global//global';
import profile from '../media/temp/profile.png';

const { width } = Dimensions.get('window');

export default class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({
            user
        })
    }

    static navigationOptions = {
        drawerLabel: 'Menu',
    };
    render() {
        const { container, profileStyle, btnStyle, btnText, username } = styles;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle}
                    onPress={() => this.props.navigation.navigate('Authetication_Screen')}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const { user } = this.state;
        const loginJSX = (
            <View style={{ flex: 1 }}>
                <Text style={username}>{user ? user.name : ''}</Text>
                <View>
                    <TouchableOpacity style={btnStyle}
                        onPress={() => this.props.navigation.navigate('OrderHistory_Screen')}>
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}
                        onPress={() => this.props.navigation.navigate('Profile_Screen')}>
                        <Text style={btnText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}
                        onPress={() => this.props.navigation.navigate('Settings_Screen')}>
                        <Text style={btnText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={profile} style={profileStyle} />
                {mainJSX}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9',
        alignItems: 'center',
    },
    profileStyle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 5,
        paddingHorizontal: 70,
        marginBottom: 10,
    },
    btnText: {
        color: '#7f8c8d',
        fontSize: 15
    },
    username: {
        color: '#fff',
        fontFamily: 'Arial Black',
        fontSize: 20,
        paddingBottom: 50,
        textAlign:'center'
    }
})
