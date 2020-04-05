import React from 'react';
import Product from './Product';
import ToolBox from './ToolBox';

const products = [
    {
        id:1,
        name:'qut',
        tags:'blue colors',
        image:'image/1.jpg',
        price:'80',
        status:'available'
    },
    {
        id:2,
        name:'qut',
        tags:'blue colors',
        image:'image/2.jpg',
        price:'80',
        status:'unavailable'
    },
    {
        id:3,
        name:'qut',
        tags:'blue colors',
        image:'image/3.jpg',
        price:'80',
        status:'available'
    }
]

export default function Products(){
    
    return (
        <div>
        <ToolBox/>
            <div className='products'>
                <div className='columns is-multiline is-desktop'>
                   
                    {products.map(product => {
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