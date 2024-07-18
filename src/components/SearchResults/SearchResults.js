import React from "react";

import "./SearchResults.css";

import SearchBar from "../SearchBar/SearchBar";
import Tracklist from "../TrackList/Tracklist";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <SearchBar onSearch={props.search} />
      <h2>Results</h2>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;