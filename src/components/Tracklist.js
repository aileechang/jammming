import React from "react";
import Track from "./Track";

function Tracklist({ tracks, onRemove }) {
    return (
        <ul>
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={() => {}}
                    onRemove={onRemove}
                    isInPlaylist={true}
                />
            ))}
        </ul>
    );
};

export default Tracklist;