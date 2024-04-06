import React, { useState } from 'react';
import { searchProductsByTitle, searchProductsByCategory } from '../api'; 

const Search = ({ onSearchResult }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title'); // 'title' or 'category' as the default

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let results = [];
      if (searchType === 'title') {
        results = await searchProductsByTitle(query);
      } else if (searchType === 'category') {
        results = await searchProductsByCategory(query);
      }
      onSearchResult(results); // Pass the results to the parent component
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
      <select 
        className="custom-select my-1 mr-sm-2" 
        value={searchType} 
        onChange={(e) => setSearchType(e.target.value)}>
        <option value="title">Title</option>
        <option value="category">Category</option>
      </select>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder={`Search by ${searchType}`}
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

export default Search;
