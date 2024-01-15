import "./App.css";
import { Component, useEffect } from "react";

const usersURL = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  render() {
    const allusers = async () => {
      const data = await fetch(usersURL);
      const response = await data.json();

      this.setState({
        monsters: response,
      });
    };

    allusers();

    return (
      <div className="App">
        {this.state.monsters.length > 0 ? (
          this.state.monsters.map((data) => {
            const { id, name } = data;
            return <h1 key={id}>{name}</h1>;
          })
        ) : (
          <h1>Your monsters Array is Empty</h1>
        )}
      </div>
    );
  }
}

export default App;
