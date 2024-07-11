import React, { useState } from "react";
import styles from "../css/Global.module.css";
import SearchBar from "./SearchBar";
import Track from "./Track";

function SearchResults({ searchQuery, filteredData, handleSearch, onAdd }) {
    return (
        <div className={styles.container}>
            <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
            <h3>Search results for: "{searchQuery}"</h3>
            {filteredData.length === 0 && searchQuery && (
                <p>No results found for "{searchQuery}".</p>
            )}
            <ul>
                {filteredData.map((track) => (
                    <Track 
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        onRemove={() => {}}
                        isInPlaylist={false}
                    />
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;