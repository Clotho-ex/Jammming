import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Playlist from "./components/Playlist/Playlist";
import SearchResults from "./components/SearchResults/SearchResults";
import Tracklist from "./components/Tracklist/Tracklist";

const mockTracks = [
  { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
  { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
  { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
];

function App() {
  const [tracks, setTracks] = useState([
    { name: "Track 1", artist: "Artist 1", album: "Album 1", id: 1 },
    { name: "Track 2", artist: "Artist 2", album: "Album 2", id: 2 },
  ]);
  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar />
      <SearchResults searchResults={mockTracks} />
      <Playlist />
      <Tracklist />
    </div>
  );
}

export default App;
