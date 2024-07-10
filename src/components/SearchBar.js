import React, { useState } from "react";
import styles from "../css/SearchResults.module.css";

function SearchBar(props) {
    return (
        <form >
            <input type="text"
                placeholder="Search for a song..." 
                value={props.searchQuery}
                onChange={props.handleChange}
            />
            <button onClick={props.handleSubmit}>
                Search
            </button>
        </form>
            
    );
}

export default SearchBar;