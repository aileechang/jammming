import React from "react";
import styles from "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      <header>
        <h1>JAMMMING</h1>
        <h3>Spotify Playlist Maker</h3>
      </header>
      <SearchBar />
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
