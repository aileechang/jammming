import React from "react";
import styles from "../css/SearchBar.module.css";

function SearchBar() {
    return (
        <form >
            <input type="text"
                placeholder="Search for a song..." 
            />
            <button>
                Search
            </button>
        </form>
    )
}

export default SearchBar;