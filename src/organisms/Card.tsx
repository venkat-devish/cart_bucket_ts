import { useShoppingCartData } from "../context/ShoppingCartContext";
import "../styles/card.scss";

type CardType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  itemQty: number;
};

const Card = ({ id, imgUrl, name, price, itemQty }: CardType) => {
  const { totalCartItems, addToCart, removeFromCart } = useShoppingCartData();
  const qty: number = itemQty;
  const actionDiv =
    qty === 0 ? (
      <div className="card__btn-1">
        <button onClick={() => addToCart(id)} className="card__btn">
          Add to cart
        </button>
      </div>
    ) : (
      <div className="card__actions">
        <button onClick={() => addToCart(id)} className="card__btn card__btn-2">
          +
        </button>
        <span>
          {qty} {qty === 1 ? "item" : "items"} in cart
        </span>
        <button
          onClick={() => removeFromCart(id)}
          className="card__btn card__btn-2"
        >
          -
        </button>
      </div>
    );
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt="Image" />
      </div>
      <div className="card__info">
        <span className="card__info-name">{name}</span>
        <span className="card__info-price">${price}</span>
      </div>
      {actionDiv}
    </div>
  );
};

export default Card;
