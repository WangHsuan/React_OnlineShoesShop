import React, { useState, useEffect } from 'react';
import axios from '../commons/axios';
import Product from './Product';
import ToolBox from './ToolBox';


const url = `/products`;

export default class Products extends React.Component{
    state = {
        products:[],
        sourceProducts:[]
    }
    componentDidMount() {
        axios.get('/products').then(response => {
          this.setState({
            products: response.data,
            sourceProducts: response.data
          });
        });
        
      }

    search = (value) =>{
        
        //get new array
        let _products = [...this.state.sourceProducts];
        //filter
        _products =  _products.filter(p => {
        //regx
        const matchArray =  p.name.match(new RegExp(value, 'gi'));
            return !!matchArray;
        });
       
        this.setState({
            products: _products
          });
       
    }
    render(){
        return (
            <div>
            <ToolBox search={this.search}/>
                <div className='products'>
                    <div className='columns is-multiline is-desktop'>
                       
                        {this.state.products.map(product => {
                            return (    <div className='column is-3' key={product.id}>
                                             <Product product={product}/>
                                        </div>
                                    )
                        })}
                    </div>     
                </div>   
            </div>   
          )
    }
    
}