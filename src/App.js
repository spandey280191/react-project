import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import {Fragment, useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Login from './components/UI/Login';
import { useSelector } from 'react-redux';


function App() {
  const [cartIsShown, setIsCartShown] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
     {isAuth && cartIsShown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} isAuth={isAuth}/>
      <main>
        <Meals isAuth={isAuth}/>
        {!isAuth && <Login></Login>}
      </main>
    </CartProvider>
  );
}

export default App;
