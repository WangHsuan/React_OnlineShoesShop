import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header(props){
    return(
        
        <div className='header'>
            <div className='grid'>
                <div className='start'>
                <Link to="/">Home</Link>
                </div>
                <div className='end'>
                {props.nickname?(
                    <span className='nickname'>
                    <i className="far fa-user"></i>
                    {props.nickname}
                    </span>
                    ):(
                        <React.Fragment>
                            <Link to="/Login">Login</Link>
                            <a href='#'>Register</a>
                        </React.Fragment>
                    )}
                    
                </div>
    </div>
         
  
</div>
)
}