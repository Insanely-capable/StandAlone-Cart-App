import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import Header from './Header';
import './App.css';


function App () {
  return (
    <CartProvider>
      <Header />
        <Cart />
    </CartProvider>
  );
};

export default App;
