import "../styles/header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartSideBar from "./CartSideBar";

const Header = () => {
  const { cartQuantity, openSidebar, cartItems } = useShoppingCart();
  console.log(cartItems.cart);
  return (
    <>
      <div className="header">
        <div className="header__logo">sishcart</div>
        <div
          className="header__cart"
          onClick={() => {
            openSidebar();
          }}
        >
          <ShoppingCartIcon sx={{ color: "#fff" }} />
          {cartQuantity > 0 && (
            <span className="header__cart--badge">{cartQuantity}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
