import "./card-list.styles.css";
import { CardItems } from "./card-item.component";
import "./card-list.styles.css";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((data) => {
        const { id } = data;
        return <CardItems key={id} data={data} />;
      })}
    </div>
  );
};
export default CardList;
