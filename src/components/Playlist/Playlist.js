import React, { useCallback } from "react";

import "./Playlist.css";

import Tracklist from "../TrackList/Tracklist";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <div className="Playlist-bar" >
        <h2>My Playlist</h2>
        <div className="My-playlist" >
          <input onChange={handleNameChange} defaultValue={"New Playlist"} />
          <button className="Playlist-save" onClick={props.onSave}>
            SAVE TO SPOTIFY
          </button>
        </div>
      </div>
      <Tracklist
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
    </div>
  );
};

export default Playlist;