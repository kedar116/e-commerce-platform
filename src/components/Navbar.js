import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 

const Navbar = ({ onSearch ,onQuery}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">E-Commerce Platform</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <SearchBar onSearch={onSearch} onQuery={onQuery} />
      </div>
    </nav>
  );
};

export default Navbar;
