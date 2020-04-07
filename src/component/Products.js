import React, { useState, useEffect } from 'react';
import axios from '../commons/axios';
import Product from './Product';
import ToolBox from './ToolBox';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Panel from './Panel'



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
    toAdd = ()=>{
        Panel.open();
    }
    render(){
        return (
            <div>
            <ToolBox search={this.search}/>
                <div className='products'>
                    <div className='columns is-multiline is-desktop'>
                       <TransitionGroup component={null}>
                        {this.state.products.map(product => {
                            return (    <CSSTransition classNames='product-fade' timeout={300} key={product.id}>
                                        <div className='column is-3' key={product.id}>
                                             <Product product={product}/>
                                        </div>
                                        </CSSTransition>
                                    )
                        })}
                        </TransitionGroup>
                    </div> 
                    <button className="button is-primary add-btn" onClick={this.toAdd}>Add</button>    
                </div>   
            </div>   
          )
    }
    
}