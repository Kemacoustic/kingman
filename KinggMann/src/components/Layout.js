import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class LayoutScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Layout Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}