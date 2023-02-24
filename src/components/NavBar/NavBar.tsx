import { NavLink } from "react-router-dom";
import "../../styles/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar__container">
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
  );
};

export default NavBar;
