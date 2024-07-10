import React from "react";
import styles from "../css/SearchResults.module.css";

function Track(props) {
    return (
        <ul>
            {props.filteredSongList.map((result, index) => (
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
    );
}

export default Track;