import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import { Spotify } from "../../Util/Spotify/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    // Fetch access token when component mounts
    Spotify.getAccessToken();
  }, []);

  function addTrack(track) {
    if (!playlistTracks.find((t) => t.id === track.id)) {
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

  async function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    try {
      await Spotify.savePlaylist(playlistName, trackURIs);
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    } catch (error) {
      console.error("Error saving playlist", error);
    }
  }

  async function search(term) {
    try {
      const result = await Spotify.search(term);
      setSearchResults(result);
    } catch (error) {
      console.error("Error searching tracks", error);
    }
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search} />

        <div className={styles["App-playlist"]}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          {/* passing searchResults state to the SearchResults component as userSearchResults */}

          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
          {/* passing playlistName & playlistTracks states to the Playlist component as userSearchResults */}
        </div>
      </div>
    </div>
  );
}

export default App;
