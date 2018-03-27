import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import backSpecial from '../media/appicon/backs.png';
export default class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarVisible: false
    };

    constructor(props) {
        super(props);
        this.state = { 
            txtName: 'Nguyen Van Pho', 
            txtAddress: '92 Le Thi Rieng / Ben Thanh', 
            txtPhone: '01694472176' 
        };
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { name, address, phone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={name}
                        underlineColorAndroid={'#fff'}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={address}
                        underlineColorAndroid={'#fff'}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={phone}
                        underlineColorAndroid={'#fff'}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity style={signInContainer}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#2980b9', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Arial Black', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Arial Black',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Arial Black', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2980b9',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});