import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, total, removeItem, changeQuantity, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
            <button onClick={() => removeItem(item.id)}>remove</button>
          </div>
          <div>
            <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
            <p>{item.quantity}</p>
            <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
          </div>
        </div>
      ))}
      <footer>
        <h3>Total: ${total}</h3>
        <button onClick={clearCart}>Clear Cart</button>
      </footer>
    </section>
  );
};

export default Cart;
