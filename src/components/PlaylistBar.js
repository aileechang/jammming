import React from "react";
import styles from "../css/Global.module.css";

function PlaylistBar({ playlistName }) {
    return (
        <form >
            <input type="text"
                placeholder="Playlist Name" 
                value={playlistName}
            />
            <button >
                Save to Spotify
            </button>
        </form>
            
    );
}

export default PlaylistBar;