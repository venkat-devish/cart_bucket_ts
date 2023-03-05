import "../styles/header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="header">
      <div className="header__logo">sishcart</div>
      <div className="header__cart">
        <ShoppingCartIcon sx={{ color: "#fff" }} />
        {cartQuantity > 0 && (
          <span className="header__cart--badge">{cartQuantity}</span>
        )}
      </div>
    </div>
  );
};

export default Header;
