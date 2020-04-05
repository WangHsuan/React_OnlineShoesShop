import React from 'react';
import Product from './Product';
import ToolBox from './ToolBox';


export default function Products(){
    return (
        <div>
        <ToolBox/>
            <div className='products'>
                <div className='columns is-multiline is-desktop'>
                    <div className='column is-3'>
                     <Product/>
                    </div>

                    <div className='column is-3'>
                    <Product/>
                   </div>

                   <div className='column is-3'>
                   <Product/>
                  </div>

                  <div className='column is-3'>
                  <Product/>
                 </div>

                 <div className='column is-3'>
                 <Product/>
                </div>
                </div>
               
                
            </div>   
        </div>   
      )
}