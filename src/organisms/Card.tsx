import "../styles/card.scss";
import CardActions from "./CardActions";

type CardType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Card = ({ id, imgUrl, name, price }: CardType) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt="Image" />
      </div>
      <div className="card__info">
        <span className="card__info-name">{name}</span>
        <span className="card__info-price">${price}</span>
      </div>
      <CardActions id={id} />
    </div>
  );
};

export default Card;
