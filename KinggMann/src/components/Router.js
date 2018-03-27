import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MenuScreen from './Menu';
import HeaderScreen from './Home';
import ProfileScreen from './Profile';
import HomeScreen from './Home';
import CartScreen from './Cart';
import SearchScreen from './Search';
import ContactScreen from './Contact';
import AuthenticationScreen from './Authentication';
import ProductDetailViewScreen from './ProductDetailView';
import ListProductScreen from './ListProduct';
import OrderHistoryScreen from './OrderHistory';

const {width} = Dimensions.get("window");

const MainStack = StackNavigator({
    Home_Screen:{
        screen:HomeScreen
    },
    Profile_Screen:{
        screen:ProfileScreen
    },
    OrderHistory_Screen:{
        screen:OrderHistoryScreen
    },
    Authetication_Screen:{
        screen:AuthenticationScreen
    },
    ProductDetailView_Screen:{
        screen:ProductDetailViewScreen
    },
    ListProduct_Screen:{
        screen:ListProductScreen
    },
},{
    navigationOptions:{
        header: false,
    }
});

const MainTab = TabNavigator({
    Home:{
        screen: MainStack,
    },
    Cart:{
        screen: CartScreen,
    },
    Search:{
        screen: SearchScreen,
    },
    Contact:{
        screen: ContactScreen,
    }
},{
    initialRouteName:'Home',
    tabBarPosition:'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions:{
        activeTintColor:'#2c3e50',
        labelStyle:{
            fontSize:12
        },
        style:{
            backgroundColor:'#2980b9'
        },
    },
});

const MainDrawer = DrawerNavigator({
    HomePage:{
        screen: MainTab,
    },
},{
    drawerWidth: (width * 2) / 3,
    drawerPosition:'left',
    headerMode: 'screen',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1
        }
      },
    contentComponent: props => <MenuScreen {...props}/>
})


export default MainDrawer;