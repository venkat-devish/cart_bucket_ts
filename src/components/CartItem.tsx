import shopItems from "../data/items.json";
import "../styles/cartitem.scss";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemsProps) => {
  const cartItem = shopItems.find((item) => item.id === id);
  return (
    <div className="cartitem">
      <div className="cartitem__prod">
        <img src={cartItem?.imgUrl} alt="" />
        <div className="cartitem__details">
          <h5>
            {cartItem?.name}
            <span>x{quantity}</span>
          </h5>
          <p>{cartItem?.price}</p>
        </div>
      </div>
      <div className="cartitem__action">
        <div>{cartItem?.price}</div>
        <button className="btn-1">X</button>
      </div>
    </div>
  );
};

export default CartItem;
