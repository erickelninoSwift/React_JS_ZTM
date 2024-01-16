import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters, searchs } = this.props;

    return (
      <div>
        {searchs.length > 0
          ? searchs.map((data) => {
              const { id, name } = data;
              return <h1 key={id}>{name}</h1>;
            })
          : monsters.map((data) => {
              const { id, name } = data;
              return <h1 key={id}>{name}</h1>;
            })}
      </div>
    );
  }
}

export default CardList;
