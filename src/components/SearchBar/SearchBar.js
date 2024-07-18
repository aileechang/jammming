import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className="SearchBar">
      <h2 className="SearchBar-title" >Find Songs</h2>
      <div className="SearchBar-inputs" >
        <input placeholder="Enter a song title..." onChange={handleTermChange} />
        <button className="SearchButton" onClick={search}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;