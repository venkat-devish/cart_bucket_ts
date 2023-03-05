import { useShoppingCart } from "../context/ShoppingCartContext";
import allItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/cart_card.scss";

const CartCard = ({ item }: any) => {
  const { getCartItemQuantity, addToCart, removeFromCart } = useShoppingCart();
  const addedCartItem = allItems.filter((el: any) => {
    return el.id === item.id;
  });
  const cartInfo = addedCartItem[0];
  const qty = getCartItemQuantity(cartInfo.id);
  return (
    <div className="drawer">
      <div className="drawer__img">
        <img src={cartInfo?.imgUrl} alt="" />
      </div>
      <div className="drawer__info">
        <div className="drawer__info-qty">
          <p>{cartInfo.name}</p>
          <span>x{qty}</span>
        </div>
        <div className="drawer__info-qty">
          <p>Price</p>
          <span>{formatCurrency(qty * cartInfo.price)}</span>
        </div>
        <div className="drawer__actions">
          <div className="drawer__actions--modify">
            <button
              className="drawer__btn drawer__btn--increase"
              onClick={() => addToCart(cartInfo.id)}
            >
              +
            </button>
            <button
              className="drawer__btn drawer__btn--decrease"
              onClick={() => removeFromCart(cartInfo.id)}
            >
              -
            </button>
          </div>
          <div>
            <DeleteIcon sx={{ color: "red" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
