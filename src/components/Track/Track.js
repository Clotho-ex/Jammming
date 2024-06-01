import React from "react";

function Track({ track, onAdd, isRemoval }) {
  const addTrack = () => {
    onAdd(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {/* Add track action button (+ or -) here */}
      {isRemoval ? (
        <button className="Track-action">-</button>
      ) : (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      )}
    </div>
  );
}

export default Track;
