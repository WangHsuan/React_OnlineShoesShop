import React from 'react';
import './App.css';
import Header from './component/Header.js';
import Products from './component/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import App from './pages/App';
import  Cart from './pages/Cart';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Router () {
 return( <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>)
};


