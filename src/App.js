import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart'
import Login from './components/Login/Login'
import Profile from './components/Profile'
import FavoritesList from './components/FavoritesList';

function App() {  
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/shopping-cart' element={<ShoppingCart/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/favorites' element={<FavoritesList/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
