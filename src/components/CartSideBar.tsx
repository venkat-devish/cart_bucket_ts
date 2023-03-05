import { Offcanvas } from "react-bootstrap";
import { CartItem, useShoppingCart } from "../context/ShoppingCartContext";
import cartData from "../data/items.json";
import CartCard from "../organisms/CartCard";

const CartSideBar = () => {
  const { isOpen, cartItems, closeSidebar } = useShoppingCart();
  console.log(cartItems);
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((el: any) => {
            return <CartCard key={el.id} item={el} />;
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSideBar;
