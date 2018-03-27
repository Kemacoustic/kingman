import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import HeaderScreen from './Header';
import backIcon from '../media/appicon/backList.png';
import sp1 from '../media/temp/sp1.jpeg';
import sp2 from '../media/temp/sp2.jpeg';
import sp3 from '../media/temp/sp3.jpeg';
import sp4 from '../media/temp/sp4.jpeg';

const { height } = Dimensions.get('window');

export default class ListProductScreen extends Component {
    render() {
        const { navigation } = this.props;

        const { container, header, wrapper, headerContainer, iconStyle, titleStyle, productContainer,
            productImage, productInfo, lastRowInfo, textName, textPrice, textMaterial, textColor, textDetail } = styles;
        return (
            <View style={container}>
                <HeaderScreen navigation={navigation} />
                <View style={headerContainer}>
                    <ScrollView style={wrapper}>
                        <View style={header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image source={backIcon} style={iconStyle} />
                            </TouchableOpacity>
                            <Text style={titleStyle}>Party Dress</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <View style={productContainer}>
                            <Image source={sp1} style={productImage} />
                            <View style={productInfo}>
                                <Text style={textName}>Lace Sleeve Si</Text>
                                <Text style={textPrice}>117$</Text>
                                <Text style={textMaterial}>Material Silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity>
                                        <Text style={textDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={sp2} style={productImage} />
                            <View style={productInfo}>
                                <Text style={textName}>Lace Sleeve Si</Text>
                                <Text style={textPrice}>117$</Text>
                                <Text style={textMaterial}>Material Silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity>
                                        <Text style={textDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={sp3} style={productImage} />
                            <View style={productInfo}>
                                <Text style={textName}>Lace Sleeve Si</Text>
                                <Text style={textPrice}>117$</Text>
                                <Text style={textMaterial}>Material Silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity>
                                        <Text style={textDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image source={sp4} style={productImage} />
                            <View style={productInfo}>
                                <Text style={textName}>Lace Sleeve Si</Text>
                                <Text style={textPrice}>117$</Text>
                                <Text style={textMaterial}>Material Silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={textColor}>Color RoyalBlue</Text>
                                    <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                                    <TouchableOpacity>
                                        <Text style={textDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex:1,
        padding: 10
    },
    wrapper: {
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    header: {
        height: height / 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    iconStyle: {
        height: 30,
        width: 30
    },
    titleStyle: {
        color: '#B10D65',
        fontFamily: 'Arial Black',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1,
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 15
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textName: {
        fontFamily: 'Arial Black',
        fontSize: 20,
        color: '#BCBCBC',
        fontWeight: '400'
    },
    textPrice: {
        fontFamily: 'Arial Black',
        color: '#B10D65',
    },
    textMaterial: {
        fontFamily: 'Arial Black',
    },
    textColor: {
        fontFamily: 'Arial Black',
    },
    textDetail: {
        fontFamily: 'Arial Black',
        color: '#B10D65',
        fontSize: 11
    }
})