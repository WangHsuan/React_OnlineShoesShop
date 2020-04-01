import React from 'react';
import './App.css';
import Header from './component/Header.js';
import Products from './component/Products'
function App() {
  return (
    <div className="App">
      
      <Header nickname=''/>
      <Products/>
    </div>
  );
}

export default App;
