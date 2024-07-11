import React from "react";
import styles from "../css/Global.module.css";

function Track({ track, onAdd, onRemove, isInPlaylist }) {
    return (
        <div className={styles.listItemContainer}>
            <li>
                <h4>{track.title}</h4>
                <div>
                    <p>{track.artist}</p>
                    <p>{track.album}</p>
                </div>
            </li>
            {isInPlaylist ? (
                <button className={styles.listButton}
                    onClick={() => onRemove(track.id)}>-</button>
            ) : (
                <button className={styles.listButton}
                    onClick={() => onAdd(track)}>+</button>
            )}
        </div>
    );
};

export default Track;