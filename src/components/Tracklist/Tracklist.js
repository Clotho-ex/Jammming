import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  const tracks = props.userSearchResults || []; // Default to an empty array if undefined

  return (
    <div className={styles.TrackList}>
      {tracks.map((track) => (
        <Track
          track={track}
          key={track.id}
          isRemoval={props.isRemoval}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
}

export default Tracklist;
