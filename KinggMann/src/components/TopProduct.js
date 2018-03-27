import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;
const url = 'http://192.168.0.104:8888/api/images/product/';

export default class TopProductScreen extends Component {

    gotoDetail(params){
        this.props.navigation.navigate('ProductDetailView_Screen', {params});
    }

    render() {
        const {params} = this.props.navigation.state;
        const { topProducts } = this.props;
        const { container, titleContainer, title, body, productContainer, productImage, productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    {topProducts.map(e => (
                        <TouchableOpacity style={productContainer}
                            onPress={() => this.gotoDetail(params)} key={e.id}>
                            <Image source={{ uri: `${url}${e.images[1]}` }} style={productImage} />
                            <Text style={productName}>{e.name.toUpperCase()}</Text>
                            <Text style={productPrice}>{e.price}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'Arial Black',
        color: '#95a5a6'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Arial Black',
        marginVertical: 5
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Arial Black',
        color: '#9b59b6',
        marginBottom: 5
    }
})