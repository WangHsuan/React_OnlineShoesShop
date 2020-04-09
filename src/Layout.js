import React from 'react';
import Header from './component/Header'

function Layout(props){
    return(
    <div className='main'>
        <Header/>
        {props.children}
    </div>
    )
}

export default Layout;