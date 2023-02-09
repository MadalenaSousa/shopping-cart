import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart'
import Login from './components/Login'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/shopping-cart' element={<ShoppingCart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
