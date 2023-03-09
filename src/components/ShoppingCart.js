import Header from './Header/Header';
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect} from 'react'

function ShoppingCart() {
  const { isLogged } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogged === false) {
      navigate('/')
    }

    document.getElementById('body').style.backgroundColor = 'white'
  }, []);
  
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default ShoppingCart;