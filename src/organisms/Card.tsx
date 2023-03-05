import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/card.scss";

type CardType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Card = ({ id, imgUrl, name, price }: CardType) => {
  const { addToCart, removeFromCart } = useShoppingCart();

  const qty: number = 1;
  // const actionDiv =
  //   qty === 0 ? (
  //     <div className="card__btn-1" onClick={() => getItemQty(id)}>
  //       <button className="card__btn">Add to cart</button>
  //     </div>
  //   ) : (
  //     <div className="card__actions">
  //       <button className="card__btn card__btn-2">+</button>
  //       <span>
  //         {qty} {qty === 1 ? "item" : "items"} in cart
  //       </span>
  //       <button className="card__btn card__btn-2">-</button>
  //     </div>
  //   );
  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt="Image" />
      </div>
      <div className="card__info">
        <span className="card__info-name">{name}</span>
        <span className="card__info-price">${price}</span>
      </div>
      {qty === 0 ? (
        <div className="card__btn-1" onClick={() => addToCart(id)}>
          <button className="card__btn">Add to cart</button>
        </div>
      ) : (
        <div className="card__actions">
          <button
            className="card__btn card__btn-2"
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <span>
            {qty} {qty === 1 ? "item" : "items"} in cart
          </span>
          <button
            className="card__btn card__btn-2"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
