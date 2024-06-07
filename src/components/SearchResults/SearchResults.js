import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ userSearchResults, onAdd, onRemove }) {
  return (
    <div className={styles.SearchResults}>
      <Tracklist
        userSearchResults={userSearchResults}
        isRemoval={false}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  );
}

export default SearchResults;
