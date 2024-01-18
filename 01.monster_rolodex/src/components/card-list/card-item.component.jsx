import "./card-list.styles.css";
import "./card.styles.css";
export const CardItems = ({ data }) => {
  const { id, name, email } = data;

  return (
    <div className="card-container">
      <img
        className=""
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
