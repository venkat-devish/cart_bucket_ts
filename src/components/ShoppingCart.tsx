import { Offcanvas } from "react-bootstrap";
import useShoppingCartContext from "../context/ShoppingCartContext";

type isOpen = {
  isCartOpen: boolean;
};

const ShoppingCart = ({ isCartOpen }: isOpen) => {
  const { closeCart } = useShoppingCartContext();
  return (
    <div>
      <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCart;
