import Header from './Header'
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react'

function ShoppingCart() {
  const { isLogged } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogged === false) {
      navigate('/')
    }
  }, []);
  
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default ShoppingCart;