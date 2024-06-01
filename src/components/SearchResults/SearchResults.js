import React from "react";
import Track from "../Track/Track";

function SearchResults({ searchResults }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {searchResults.map((track) => (
        <Track track={track} key={track.id} />
      ))}
    </div>
  );
}

export default SearchResults;
