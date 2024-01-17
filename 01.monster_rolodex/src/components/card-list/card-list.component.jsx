import { Component } from "react";
import "./card-list.styles.css";
import { CardItems } from "./card-item.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters, searchs } = this.props;

    return (
      <div className="card-list">
        {searchs.length > 0
          ? searchs.map((data) => {
              const { id } = data;
              return <CardItems key={id} data={data} />;
            })
          : monsters.map((data) => {
              const { id } = data;
              return <CardItems key={id} data={data} />;
            })}
      </div>
    );
  }
}

export default CardList;
