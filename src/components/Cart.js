import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="container mt-3">
      <h2>Cart</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row mb-3">
          <div className="col">{item.title}</div>
          <div className="col">
            <button className="btn btn-info" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button className="btn btn-info" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>
          <div className="col">${item.price * item.quantity}</div>
          <div className="col">
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart
