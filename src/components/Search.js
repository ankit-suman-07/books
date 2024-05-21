// components/Search.js
import React from 'react';

const Search = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by author"
        />
    );
};

export default Search;
