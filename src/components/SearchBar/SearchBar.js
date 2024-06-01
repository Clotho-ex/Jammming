import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Enter a song, Album, or Artist" />
      <button className="SearchButton">Search</button>
    </div>
  );
};

export default SearchBar;
