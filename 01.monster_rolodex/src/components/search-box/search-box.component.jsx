import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    const { handleFilter, nameClass } = this.props;
    return (
      <input
        type="text"
        className={`search-box ${nameClass}`}
        placeholder="search monster"
        onChange={(e) => handleFilter(e.target.value)}
      />
    );
  }
}

export default SearchBox;
