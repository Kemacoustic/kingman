import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderScreen from './Header';
import CollectionScreen from './Collection';
import CategoryScreen from './Category';
import TopProductScreen from './TopProduct';

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            types: [],
            topProducts: []
        };
    }

    componentDidMount(){
        fetch("http://192.168.0.104:8888/api/index.php")
          .then((response) => response.json())
          .then((responseJson) => {
              const {type, product} = responseJson;
              this.setState({
                  types: type,
                  topProducts: product
              });
          })
          .catch(error => {
            console.error(error);
          });
    }

    render() {
        const { navigation } = this.props;
        const {types, topProducts} = this.state;
        return (
            <View style={{ flex: 1 }}>
                <HeaderScreen navigation={navigation} title='Home' />
                <ScrollView>
                    <CollectionScreen />
                    <CategoryScreen navigation={navigation} types={types}/>
                    <TopProductScreen navigation={navigation} topProducts={topProducts}/>
                </ScrollView>
            </View>
        )
    }
}