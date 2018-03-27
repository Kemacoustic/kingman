import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const url = 'http:///192.168.0.104:8888/api/images/type/';

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startswiper: false,
        };
    }

    componentWillMount() {
        setTimeout(() => { this.setState({ startswiper: true }) }, 500);
    }

    _renderSwiper() {
        const { types } = this.props;
        return (
            <Swiper height={170} showsButtons={false} removeClippedSubviews={false} autoplay={true} autoplayTimeout={3} autoplayDirection={true}
                paginationStyle={{ bottom: 10 }}>
                {types.map(e => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ListProduct_Screen')} key={e.id}>
                        <ImageBackground source={{ uri: `${url}${e.image}` }} style={{ height: imageHeight, width: imageWidth}}>
                        <View style={{flex:1, justifyContent:'center'}}>
                        <Text style={{textAlign:'center', fontFamily:'Arial Black', fontSize:15, color: '#95a5a6'}}>
                        {e.name}
                        </Text>
                        </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </Swiper>
        );
    }

    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    {
                        this.state.startswiper === true ?
                            this._renderSwiper()
                            : null
                    }
                </View>
            </View>
        )
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 800) * 400;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AEAFAE'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
})