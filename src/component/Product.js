import React from 'react';

class Product extends React.Component{

    product = {}

    render(){
        return(
            <div className='product'>
                    <div className='p-content'>
                    <div className='img-wrapper'>
                        <figure className='image is4by3'>
                            <img src='image/1.jpg' alt='shoes' />
                        </figure>
                    </div>
                    <p className='p-tags'>25 Colors</p>
                    <p className='p-name'>lorem</p>
                </div>
             <div className='p-footer'>
                <p className='price'>$688.00</p>
                <button className='add-cart'>
                    <i className='fa fa-shopping-cart'></i>
                    <i className='fa fa-exclamation'></i>
                </button>
             </div>
            </div>
        )
    }
}

export default Product;