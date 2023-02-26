import { NavLink } from "react-router-dom";
import useShoppingCartContext from "../context/ShoppingCartContext";
import { CartSVG } from "../organisms";
import "../styles/NavBar.scss";

const NavBar = () => {
  const { cartQuantity } = useShoppingCartContext();
  return (
    <div className="navbar__container">
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__active" : "navbar__inactive"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? "navbar__active" : "navbar__inactive"
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__active" : "navbar__inactive"
          }
        >
          About
        </NavLink>
      </div>
      <div>
        <CartSVG />
      </div>
    </div>
  );
};

export default NavBar;
