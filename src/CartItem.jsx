// import React from 'react';
// import { useCart } from './CartContext';

// const CartItem = ({ item }) => {
//   const { dispatch } = useCart();

//   const handleChangeQuantity = (id, quantity) => {
//     dispatch({ type: 'CHANGE_QUANTITY', payload: { id, quantity } });
//   };

//   return (
//     <div className="cart-item">
//       <img src={item.img} alt={item.title} />
//       <div>
//         <h4>{item.title}</h4>
//         <h5>${item.price}</h5>
//         <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>remove</button>
//       </div>
//       <div>
//         <button onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>↑</button>
//         <p>{item.quantity}</p>
//         <button onClick={() => handleChangeQuantity(item.id, item.quantity - 1)}>↓</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

// const handleDecrease = () => {
//     if (item.quantity > 1) {
//       dispatch({ type: 'CHANGE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } });
//     } else {
//       dispatch({ type: 'REMOVE_ITEM', payload: item.id });
//     }
//   };
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
