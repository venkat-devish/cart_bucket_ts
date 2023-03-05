import { useShoppingCart } from "../context/ShoppingCartContext";

const CardActions = ({ id }: any) => {
  const { addToCart, removeFromCart, getCartItemQuantity } = useShoppingCart();
  const qty: number = getCartItemQuantity(id);

  return (
    <>
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
    </>
  );
};

export default CardActions;
