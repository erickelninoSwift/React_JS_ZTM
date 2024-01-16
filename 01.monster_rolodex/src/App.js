import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
const usersURL = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchResults: [],
    };
  }

  componentDidMount() {
    fetch(usersURL)
      .then((data) => {
        return data.json();
      })
      .then((dataEntry) => {
        console.log(dataEntry);
        this.setState({
          monsters: dataEntry.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        });
      });
  }

  handleFilter = (data) => {
    this.setState({
      searchResults:
        data.length > 0 &&
        this.state.monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(data.toLowerCase());
        }),
    });
  };

  render() {
    const { monsters, searchResults } = this.state;
    const { handleFilter } = this;

    return (
      <div className="App">
        <SearchBox handleFilter={handleFilter} nameClass={`search-box`} />
        <CardList monsters={monsters} searchs={searchResults} />
      </div>
    );
  }
}

export default App;
