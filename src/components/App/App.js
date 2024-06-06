import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import { Spotify } from "../../Util/Spotify/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    // Fetch access token when component mounts
    Spotify.getAccessToken();
  }, []);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    } else {
      console.log("Track Already on the List");
    }
  }

  function removeTrack(track) {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id)
    );
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
