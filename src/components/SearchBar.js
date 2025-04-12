import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  // Handle form submission or button click
  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input); // Pass the input value to the parent component (App.js)
    }
  };

  // Handle "Enter" key press for search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search-bar container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search for movies..."
            value={input}
            onChange={(e) => setInput(e.target.value)} // Update state on input change
            onKeyDown={handleKeyPress} // Allow search on Enter key press
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary ml-2"
            onClick={handleSearch} // Trigger search on button click
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
