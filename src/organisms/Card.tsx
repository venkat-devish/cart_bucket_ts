import "../styles/card.scss";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const Card = ({ id, name, price, img }: StoreProps) => {
  const qty: number = 0;
  return (
    <div className="card">
      <img className="card__image" src={img} alt="image" />
      <div className="card__details">
        <h2>{name}</h2>
        {qty === 0 ? (
          <button className="card__actions--qty card__actions--qty-add d-flex">
            + Add
          </button>
        ) : (
          <div className="card__buttons">
            <div className="card__actions">
              <button className="card__actions--qty d-flex">-</button>
              <span>7 in cart</span>
              <button className="card__actions--qty d-flex">+</button>
            </div>
            <div>
              <button className="card__actions--remove">Remove</button>
            </div>
          </div>
        )}
        <span>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default Card;
