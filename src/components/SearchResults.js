import React, { useEffect, useState } from "react";
import styles from "../css/SearchResults.module.css";
import SearchBar from "./SearchBar";
import Tracklist from "./Tracklist";

function SearchResults() {
    const songList = [
        { title: "Hello", artist: "Adele", album: "25", id: 1},
        { title: "Love in the Dark", artist: "Adele", album: "25", id: 2},
        { title: "Remedy", artist: "Adele", album: "25", id: 3},
        { title: "Easy on Me", artist: "Adele", album: "30", id: 4},
        { title: "Cry Your Heart Out", artist: "Adele", album: "30", id: 5},
        { title: "Rolling in the Deep", artist: "Adele", album: "21", id: 6},
        { title: "Set Fire to the Rain", artist: "Adele", album: "21", id: 7},
        { title: "Someone Like You", artist: "Adele", album: "21", id: 8},
        { title: "Make You Feel My Love", artist: "Adele", album: "19", id: 9},
        { title: "Chasing Pavements", artist: "Adele", album: "19", id: 10},
        { title: "When We Were Young", artist: "Adele", album: "25", id: 11}
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSongs, setFilteredSongs] = useState([]);

    function handleChange(e) {
        setSearchQuery(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const filtered = songList.filter((song) => 
            song.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSongs(filtered);
    };

    return (
        <div className={styles.container}>
            <SearchBar searchQuery={searchQuery} handleChange={handleChange} handleSubmit={handleSubmit} />
            <Tracklist filteredSongs={filteredSongs}/>
        </div>
    );
}

export default SearchResults;