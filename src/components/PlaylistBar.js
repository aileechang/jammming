import React from "react";
import styles from "../css/Global.module.css";

function PlaylistBar({ playlistName, handleChange }) {
    return (
        <form >
            <input type="text"
                placeholder="Playlist Name" 
                value={playlistName}
                onChange={handleChange}
            />
            <button >
                Save to Spotify
            </button>
        </form>
            
    );
}

export default PlaylistBar;