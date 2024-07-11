import React, { useState } from "react";
import styles from "../css/Global.module.css";
import PlaylistBar from "./PlaylistBar";
import Tracklist from "./Tracklist";

function Playlist({ playlistName, playlist, onRemove }) {
    return (
        <div className={styles.container} >
            <PlaylistBar playlistName={playlistName} />
            <Tracklist tracks={playlist} onRemove={onRemove} />
        </div>
    );
}

export default Playlist;