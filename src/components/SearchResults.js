import React from 'react';
import Product from './Product';


const SearchResults = ({ results ,  addToCart, cartItems}) => {
  console.log("Results=",results);

  const validResults = Array.isArray(results) ? results : [];

  if (validResults.length === 0) {
    return <div className="container mt-3">No results found.</div>;
  }

  return (
    <div className="container mt-3">
      <h2>Search Results</h2>
      <div className="row">
        {validResults.map((product) => (
        //   <div key={product.id} className="col-md-4 mb-3">
        //     <div className="card">
        //       <img src={product.thumbnail} className="card-img-top" alt={product.title} />
        //       <div className="card-body">
        //         <h5 className="card-title">{product.title}</h5>
        //         <p className="card-text">${product.price}</p>

          
    
        //       </div>
        //     </div>
        //   </div>
        <Product key={product.id} product={product} cartItems={cartItems} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;


