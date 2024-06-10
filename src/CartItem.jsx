
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { changeQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    changeQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      changeQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h5>${item.price}</h5>
        <button onClick={() => removeItem(item.id)}>remove</button>
      </div>
      <div>
        <button onClick={handleIncrease}>↑</button>
        <p>{item.quantity}</p>
        <button onClick={handleDecrease}>↓</button>
      </div>
    </div>
  );
};

export default CartItem;
