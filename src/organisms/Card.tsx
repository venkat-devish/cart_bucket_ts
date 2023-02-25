import useShoppingCartContext from "../context/ShoppingCartContext";
import "../styles/card.scss";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const Card = ({ id, name, price, img }: StoreProps) => {
  const {
    getItemQuantity,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeCartItem,
  } = useShoppingCartContext();
  const qty: number = getItemQuantity(id);

  return (
    <div className="card">
      <img className="card__image" src={img} alt="image" />
      <div className="card__details">
        <div className="card__info">
          <h2>{name}</h2>
          <span>{formatCurrency(price)}</span>
        </div>
        <div>
          {qty === 0 ? (
            <button
              className="card__actions--qty card__actions--qty-add d-flex"
              onClick={() => increaseCartItemQuantity(id)}
            >
              + Add
            </button>
          ) : (
            <div className="card__buttons">
              <div className="card__actions">
                <button
                  className="card__actions--qty d-flex"
                  onClick={() => decreaseCartItemQuantity(id)}
                >
                  -
                </button>
                <span>{qty} in cart</span>
                <button
                  className="card__actions--qty d-flex"
                  onClick={() => increaseCartItemQuantity(id)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="card__actions--remove"
                  onClick={() => removeCartItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
