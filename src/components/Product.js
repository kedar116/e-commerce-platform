import React from 'react';

const Product = ({ product, cartItems, addToCart }) => {
   
    const isInCart = (Array.isArray(cartItems) ? cartItems.find(item => item.id === product.id) : null);
    const quantity = isInCart ? isInCart.quantity : 0;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            {quantity > 0 ? `In Cart (${quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
