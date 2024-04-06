  import 'bootstrap/dist/css/bootstrap.min.css';
  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  import ProductList from './components/ProductList';
  import Cart from './components/Cart';
  import Navbar from './components/Navbar';
  import SearchResults from './components/SearchResults';
  import Search from './components/Search';
  

  const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const handleSearch = (results) => {
      console.log('handleSearch in App', results); 
      setSearchResults(results);
    };

    const handleQuery = (query) => {
      console.log('handleQuery in App', query); 
      setQuery(query);
    };

    const addToCart = (product) => {
      setCartItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.id === product.id);
        if (itemExists) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };

    const removeFromCart = (productId) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: quantity } : item
        )
      );
    };
    return (
      <div>
          <Router>
        <Navbar onSearch={handleSearch} onQuery={handleQuery} />
        <Routes>
          <Route path="/" element={query===""     ? <ProductList addToCart={addToCart} cartItems={cartItems} /> : <SearchResults results={searchResults} addToCart={addToCart} cartItems={cartItems} /> } />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/search" element={<SearchResults results={searchResults} />} />
        </Routes>
      </Router>
      {/* <ProductList addToCart={addToCart} cartItems={cartItems} /> */}
      {/* {query===""     && <ProductList addToCart={addToCart} cartItems={cartItems} /> }
      {query!=""     && <SearchResults results={searchResults} /> } */}
      </div>
      
    );
  };

  export default App;
