import React, { useState } from "react";
import styles from "../css/Global.module.css";
import PlaylistBar from "./PlaylistBar";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, handleChange, playlist, onRemove }) {
    return (
        <div className={styles.container} >
            <PlaylistBar playlistName={playlistName} handleChange={handleChange} />
            <Tracklist tracks={playlist} onRemove={onRemove} />
        </div>
    );
}

export default Playlist;