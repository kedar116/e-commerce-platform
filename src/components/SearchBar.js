import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchProductsByTitle, searchProductsByCategory} from '../api'; 

const SearchBar = ({ onSearch, onQuery }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    onQuery(query);
    e.preventDefault();
    if (!query.trim()) return; // Avoid empty queries
    try {
        let results = [];
        if (searchType === 'title') {
          results = await searchProductsByTitle(query);
        } else if (searchType === 'category') {
          results = await searchProductsByCategory(query);
        }
      
        console.log(results);
        onSearch(results);
       
    
    } catch (error) {
      console.error('Search failed:', error);
    
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
        
        <select
        className="custom-select mr-sm-2"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        >
        <option value="title">Title</option>
        <option value="category">Category</option>
        </select>  

      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
