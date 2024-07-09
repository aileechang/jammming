import React from "react";
import styles from "../css/SearchResults.module.css";

const results = [
    { title: "Hello", artist: "Adele", album: "25"},
    { title: "Love in the Dark", artist: "Adele", album: "25"},
    { title: "Remedy", artist: "Adele", album: "25"}
];

function SearchResults() {
    return (
        <div className={styles.resultsContainer} >
            <h3>Search results for: ""</h3>
            <ul>
                {results.map((result, index) => (
                    <div key={index} className={styles.listItemContainer} >
                        <li>
                            <h4>{result.title}</h4>
                            <div>
                                <p>{result.artist}</p>
                                <p>{result.album}</p>
                            </div>
                        </li>
                        <button className={styles.listButton} >+</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;