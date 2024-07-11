import React, { useState } from "react";
import styles from "../css/Global.module.css";

function SearchBar({ searchQuery, handleSearch }) {
    return (
        <form >
            <input type="text"
                placeholder="Search for a song..." 
                value={searchQuery}
                onChange={handleSearch}
            />
            <button onClick={handleSearch}>
                Search
            </button>
        </form>
            
    );
}

export default SearchBar;