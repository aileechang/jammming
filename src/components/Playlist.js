import React from "react";
import styles from "../css/Playlist.module.css";

const results = [
    { title: "Hello", artist: "Adele", album: "25"},
    { title: "Love in the Dark", artist: "Adele", album: "25"},
    { title: "Remedy", artist: "Adele", album: "25"}
];

function Playlist() {
    return (
        <div className={styles.resultsContainer} >
            <form>
                <input id={styles.playlistInput}
                    type="text"
                    placeholder="Playlist Name" />
                <button id={styles.playlistButton} >Save to Spotify</button>
            </form>
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
                        <button className={styles.listButton} >-</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;