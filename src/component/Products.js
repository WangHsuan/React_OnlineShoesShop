import React, { useState, useEffect } from 'react';
import axios from '../commons/axios';
import Product from './Product';
import ToolBox from './ToolBox';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Panel from './Panel';
import AddInventory from './AddInventory';



export default class Products extends React.Component{
    state = {
        products:[],
        sourceProducts:[],
        cartNum:0
    }

    componentDidMount() {
        axios.get('/products').then(response => {
          this.setState({
            products: response.data,
            sourceProducts: response.data
          });
        });
        this.updateCartNum();
        
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
        Panel.open({
            component:AddInventory,
            callback: data => {
                //console.log('Products: ',data);
                if(data){
                    this.add(data);
                }
            }
        });
    }
    add = (product) => {
        const _products = [...this.state.products];
        _products.push(product);
        const _sProducts = [...this.state.sourceProducts];
        _sProducts.push(product);
        this.setState({
            products:_products,
            sourceProducts:_sProducts
        })
    }
    update = product =>{
        const _products = [...this.state.products];
        //update
        const _index = _products.findIndex(p=>p.id === product.id)
        _products.splice(_index,1,product)
        const _sProducts = [...this.state.sourceProducts];
        const _sIndex = _sProducts.findIndex(p=>p.id === product.id)
        _sProducts.splice(_sIndex,1,product)

        this.setState({
            products:_products,
            sourceProducts:_sProducts
        })
    }
    delete = id => {
        const _products = this.state.products.filter(p => p.id !== id);
        const _sProducts = this.state.sourceProducts.filter(p=>p.id !== id)
        this.setState({
            products : _products,
            sourceProducts: _sProducts
        })
    }
    updateCartNum = async () =>{
        const cartNum = await this.initCartNum();
        this.setState({
            cartNum:cartNum
        })
    }

    initCartNum = async () => {
        const user = global.auth.getUser()||{};
        const res = await axios.get('/carts',{
            params:{
                userId:user.email
            }
        } )
        const carts = res.data || [];
        const cartNum = carts
                        .map(cart=>cart.mount)
                        .reduce((a,value) => a + value, 0)
        return cartNum
    }
    render(){
        return (
            <div>
            <ToolBox search={this.search} cartNum={this.state.cartNum}/>
                <div className='products'>
                    <div className='columns is-multiline is-desktop'>
                       <TransitionGroup component={null}>
                        {this.state.products.map(product => {
                            return (    <CSSTransition classNames='product-fade' timeout={300} key={product.id}>
                                        <div className='column is-3' key={product.id}>
                                             <Product 
                                                product={product}
                                                update={this.update} 
                                                delete={this.delete}
                                                updateCartNum={this.updateCartNum}
                                                />
                                        </div>
                                        </CSSTransition>
                                    )
                        })}
                        </TransitionGroup>
                    </div> 
                    {
                        (global.auth.getUser()||{}).type === 1 &&(
                            <button className="button is-primary add-btn" onClick={this.toAdd}>Add</button> 
                        )}
                       
                </div>   
            </div>   
          )
    }
    
}