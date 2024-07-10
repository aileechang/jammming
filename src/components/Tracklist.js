import React from "react";
import Track from "./Track";

function Tracklist(props) {
    const filteredSongList = props.filteredSongs;
    return (
        <Track filteredSongList={filteredSongList} />
    );
}

export default Tracklist;