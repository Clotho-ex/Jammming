import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({
  playlistName,
  playlistTracks,
  onNameChange,
  onRemove,
  onSave,
}) {
  function handleNameChange({ target }) {
    onNameChange(target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input
        placeholder="New Playlist"
        value={playlistName}
        onChange={handleNameChange}
      />
      <Tracklist
        userSearchResults={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />
      <button className={styles["Playlist-save"]} onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
