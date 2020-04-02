import React from 'react';
import './App.css';
import Header from './component/Header.js';
import Products from './component/Products';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import App from './pages/App';
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
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>)
};


