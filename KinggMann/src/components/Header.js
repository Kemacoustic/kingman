import React, { Component } from 'react';
import { View, Dimensions, Text, TextInput, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import logoIcon from '../media/appicon/ic_logo.png';
import menuIcon from '../media/appicon/ic_menu.png';

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export default class HeaderScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
      };
    render() {
        return (
            <View style={{ height: height / 8, backgroundColor: '#2980b9', justifyContent: 'space-around' }}>
                <StatusBar hidden={true} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft:32, paddingRight:32, paddingTop:5 }}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                    <Image source={menuIcon} style={{height:25, width:25}}/>
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontFamily: 'Arial Black', fontSize: 20 }}>Wearing a Dress</Text>
                    <Image source={logoIcon} style={{height:25, width:25}} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                    <TextInput
                        style={{ height: height / 20, width: width / 1.2, backgroundColor: '#fff', paddingVertical:0 }}
                        placeholder='What do you want to buy?'
                        underlineColorAndroid='transparent'
                    />
                </View>
            </View>
        );
    }
}
