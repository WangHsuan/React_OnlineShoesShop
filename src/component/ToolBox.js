import React, { useState } from 'react';

function ToolBox (props){
    const [searchText, setsearchText] = useState('');
   
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value
        setsearchText(value)
        props.search(value)
    }
    const clearSearchText = (e) =>{
        e.preventDefault();
        setsearchText('');
        props.search('');
    }
    
        return(
            <div className='tool-box'>
            <div className='logo-text'> Store</div>

            <div className="search-box">
            <div className="field has-addons">
                <div className="control">
                    <input
                        type="text"
                        className="input search-input"
                        placeholder="Search Product"
                        value={searchText}
                        onChange={handleChange}
                    />
                </div>
                <div className="control">
                    <button className="button" onClick={clearSearchText}>
                        X
                    </button>
                </div>
            </div>
            </div>
            <div to="/cart" className="cart-box" >
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-num">({props.cartNum})</span>
            </div>   
        </div>
        )
    
}

export default ToolBox;