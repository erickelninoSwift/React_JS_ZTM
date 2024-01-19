import { Component } from "react";
import "./search-box.styles.css";
const SearchBox = ({ SearchString, nameClass }) => {
  return (
    <input
      type="text"
      className={`search-box ${nameClass}`}
      placeholder="search monster"
      onChange={(e) => SearchString(e.target.value)}
    />
  );
};

export default SearchBox;
