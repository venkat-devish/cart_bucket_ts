import { Offcanvas } from "react-bootstrap";
import useShoppingCartContext from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

type isOpen = {
  isCartOpen: boolean;
};

const ShoppingCart = ({ isCartOpen }: isOpen) => {
  const { closeCart, cartItems } = useShoppingCartContext();
  return (
    <div>
      <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((ele) => (
            <CartItem key={ele.id} {...ele} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCart;
