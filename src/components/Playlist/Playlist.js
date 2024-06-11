import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({
  playlistName,
  playlistTracks,
  onNameChange,
  onRemove,
  onSave,
}) {
  const [isFocused, setIsFocused] = useState(false);

  function handleNameChange({ target }) {
    onNameChange(target.value);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <div className={styles.Playlist}>
      <input
        placeholder={isFocused ? "" : "Customize Name"}
        value={playlistName}
        onChange={handleNameChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
