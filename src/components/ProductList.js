import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Product from './Product'; 

const ProductList = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} cartItems={cartItems} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

