import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
const usersURL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const fetchAllMonsters = async () => {
      const response = await fetch(usersURL);
      const data = await response.json();
      setMonsters(data);
    };
    fetchAllMonsters();
  }, []);

  useEffect(() => {
    const currentFieltered = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredMonsters(() => currentFieltered);
  }, [monsters, searchString]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox SearchString={setSearchString} nameClass={`search-box`} />
      {monsters.length > 0 && <CardList monsters={filteredMonster} />}
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchResults: [],
//     };
//   }

//   componentDidMount() {
//     fetch(usersURL)
//       .then((data) => {
//         return data.json();
//       })
//       .then((dataEntry) => {
//         console.log(dataEntry);
//         this.setState({
//           monsters: dataEntry.sort(function (a, b) {
//             if (a.name < b.name) {
//               return -1;
//             }
//             if (a.name > b.name) {
//               return 1;
//             }
//             return 0;
//           }),
//         });
//       });
//   }

//   handleFilter = (data) => {
//     this.setState({
//       searchResults:
//         data.length > 0 &&
//         this.state.monsters.filter((monster) => {
//           return monster.name.toLowerCase().includes(data.toLowerCase());
//         }),
//     });
//   };

//   render() {
//     const { monsters, searchResults } = this.state;
//     const { handleFilter } = this;

//     return (

//     );
//   }
// }

export default App;
