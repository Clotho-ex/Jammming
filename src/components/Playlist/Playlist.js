import React from "react";
import "./Playlist.css";

const Playlist = () => {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <button className="Playlist-save">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
