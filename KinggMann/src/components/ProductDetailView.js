import React, {Component} from 'react';
import ProductDetailScreen from './ProductDetail';

export default class ProductDetailViewScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount(){
        fetch("http:///192.168.0.104:8888/api/index.php")
          .then((response) => response.json())
          .then((responseJson) => {
              const {product} = responseJson;
              this.setState({
                  products: product
              });
          })
          .catch(error => {
            console.error(error);
          });
    }

    render(){
        const {navigation} = this.props
        const {state: {params}} = navigation;
        const {products} = this.state;
        return(
            <ProductDetailScreen {...params} {...this.props} products={products}/>
        )
    }
}

