import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('https://www.course-api.com/react-useReducer-cart-project')
      .then(response => {
        const initialCart = response.data.map(item => ({ ...item, quantity: 1 }));
        setCart(initialCart);
        setTotal(calculateTotal(initialCart));
      })
      .catch(error => console.error(error));
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  const changeQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ cart, total, removeItem, changeQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
