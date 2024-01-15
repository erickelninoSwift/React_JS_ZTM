import "./App.css";
import { Component, useEffect, useState } from "react";

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
    // const allusers = async () => {
    //   const data = await fetch(usersURL);
    //   const response = await data.json();

    //   this.setState({
    //     monsters: response,
    //   });

    fetch(usersURL)
      .then((data) => {
        return data.json();
      })
      .then((dataEntry) => {
        console.log(dataEntry);
        this.setState({
          monsters: dataEntry,
        });
      });
  }

  render() {
    // const [monster, setMonster] = useState("");

    const handleFilter = (data) => {
      this.setState({
        searchResults:
          data.length > 0 &&
          this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(data.toLowerCase());
          }),
      });
    };

    return (
      <div className="App">
        <input
          type="text"
          className="search-box"
          placeholder="search monster"
          onChange={(e) => handleFilter(e.target.value)}
        />
        {this.state.searchResults.length > 0
          ? this.state.searchResults.map((data) => {
              const { id, name } = data;
              return <h1 key={id}>{name}</h1>;
            })
          : this.state.monsters.map((data) => {
              const { id, name } = data;
              return <h1 key={id}>{name}</h1>;
            })}
      </div>
    );
  }
}

export default App;
