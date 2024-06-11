import React from "react";
import styles from "./Track.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Track({ track, isRemoval, onAdd, onRemove }) {
  function renderAction() {
    return (
      <button
        className={styles["Track-action"]}
        onClick={isRemoval ? passTrackToRemove : passTrack}>
        <FontAwesomeIcon icon={isRemoval ? faMinus : faPlus} size="xl" />
      </button>
    );
  }

  function passTrack() {
    onAdd(track);
  }

  function passTrackToRemove() {
    onRemove(track);
  }

  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        <h3>{track.name}</h3>
        <p>
          {track.artist} <span>|</span> {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
