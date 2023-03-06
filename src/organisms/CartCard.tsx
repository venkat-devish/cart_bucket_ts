import { useShoppingCart } from "../context/ShoppingCartContext";
import allItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import "../styles/cart_card.scss";

const CartCard = ({ item }: any) => {
  const {
    getCartItemQuantity,
    addToCart,
    decreaseQtyFromCart,
    removeFromCart,
  } = useShoppingCart();
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
          <h6>{cartInfo.name}</h6>
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
              onClick={() => decreaseQtyFromCart(cartInfo.id)}
            >
              -
            </button>
          </div>
          <IconButton onClick={() => removeFromCart(cartInfo.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
