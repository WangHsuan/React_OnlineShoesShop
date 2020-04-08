import React from 'react';
import {formatPrice} from '../commons/helper';
import  Panel  from "./Panel";
import EditInventory from "./EditInventory";

function Product(props){

    const{name,tags,image,price,status} = props.product;
    const _pClass ={
        available:'product',
        unavailable:'product out-stock'
    }
    const toEdit = () =>{
        Panel.open({
            component:EditInventory,
            props:{
                product: props.product
            },
            callback: (data) =>{
                console.log(data)
            }
        }
        )
    }

        return(
            <div className={_pClass[status]}>
                    <div className='p-content'>
                    <div className='p-head has-text-right' onClick={toEdit}>
                        <span className='icon edit-btn'>
                        <i className='fas fa-sliders-h'></i>
                        </span>
                    </div>
                    <div className='img-wrapper'>
                        <div className="out-stock-text">Out OF Stock</div>
                        <figure className='image is4by3'>
                            <img src={image} alt='shoes' />
                        </figure>
                    </div>
                </div>
                <p className='p-tags'>{tags}</p>
                <p className='p-name'>{name}</p>
             <div className='p-footer'>
                <p className='price'>{formatPrice(price)}</p>
                <button className='add-cart' disabled={status === 'unavailable'}>
                    <i className='fa fa-shopping-cart'></i>
                    <i className='fa fa-exclamation'></i>
                </button>
             </div>
            </div>
        )
  
}

export default Product;