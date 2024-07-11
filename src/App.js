import React, { useState } from "react";
import styles from "./App.css";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  // Logic to retreive song data... Use mock data below temporarily
  const songData = [
    { title: "Hello", artist: "Adele", album: "25", id: 1},
    { title: "Love in the Dark", artist: "Adele", album: "25", id: 2},
    { title: "Remedy", artist: "Adele", album: "25", id: 3},
    { title: "Easy on Me", artist: "Adele", album: "30", id: 4},
    { title: "Cry Your Heart Out", artist: "Adele", album: "30", id: 5},
    { title: "Rolling in the Deep", artist: "Adele", album: "21", id: 6},
    { title: "Set Fire to the Rain", artist: "Adele", album: "21", id: 7},
    { title: "Someone Like You", artist: "Adele", album: "21", id: 8},
    { title: "Make You Feel My Love", artist: "Adele", album: "19", id: 9},
    { title: "Chasing Pavements", artist: "Adele", album: "19", id: 10},
    { title: "When We Were Young", artist: "Adele", album: "25", id: 11}
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlist, setPlaylist] = useState([]);

  function handleSearch(query) {
    setSearchQuery(query.target.value);
    query.preventDefault();
    const filtered = songData.filter((song) => 
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  function handleChange(e) {
    setPlaylistName(e.target.value);
  };

  const isTrackInPlaylist = (track) => {
    return playlist.some((item) => item.id === track.id);
  };

  const addTrackToPlaylist = (track) => {
    if (!isTrackInPlaylist(track)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  return (
    <div className="App">
      <header>
        <h1>JAMMMING</h1>
        <h3>Spotify Playlist Maker</h3>
      </header>
      <main>
        <SearchResults 
          searchQuery={searchQuery}
          filteredData={filteredData}
          handleSearch={handleSearch}
          onAdd={addTrackToPlaylist}
           />
        <Playlist 
          playlistName={playlistName}
          handleChange={handleChange}
          playlist={playlist}
          onRemove={removeTrackFromPlaylist}
        />
      </main>
    </div>
  );
}

export default App;
