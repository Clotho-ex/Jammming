import React, { useState, useCallback } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const passTerm = useCallback(() => {
    onSearch(term);
  }, [term, onSearch]);

  const handleTermChange = useCallback(({ target }) => {
    setTerm(target.value);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        passTerm();
      }
    },
    [passTerm]
  );

  return (
    <div className={styles.SearchBar}>
      <input
        placeholder={isFocused ? "" : "Search a Song"}
        value={term}
        onChange={handleTermChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.SearchButton} onClick={passTerm}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
