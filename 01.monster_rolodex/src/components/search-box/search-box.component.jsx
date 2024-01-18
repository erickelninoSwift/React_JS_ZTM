import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    const { SearchString, nameClass } = this.props;
    return (
      <input
        type="text"
        className={`search-box ${nameClass}`}
        placeholder="search monster"
        onChange={(e) => SearchString(e.target.value)}
      />
    );
  }
}

export default SearchBox;
