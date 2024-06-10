import React from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { totalQuantity } = useCart();

  return (
    <header className="header">
      <h1>Shopping Cart</h1>
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
    </header>
  );
};

export default Header;