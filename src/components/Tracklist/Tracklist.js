import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ userSearchResults = [], isRemoval, onAdd, onRemove }) {
  return (
    <div className={styles.TrackList}>
      {userSearchResults.map((track) => (
        <Track
          track={track}
          key={track.id}
          isRemoval={isRemoval}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Tracklist;
