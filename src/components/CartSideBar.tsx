import { Offcanvas } from "react-bootstrap";
import { CartItem, useShoppingCart } from "../context/ShoppingCartContext";
import cartData from "../data/items.json";
import CartCard from "../organisms/CartCard";
import noItem from "../assets/shopping-basket.png";

const CartSideBar = () => {
  const { isOpen, cartItems, closeSidebar, cartQuantity } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartQuantity > 0 ? (
            cartItems.map((el: any) => {
              return <CartCard key={el.id} item={el} />;
            })
          ) : (
            <div className="no-items">
              <img src={noItem} alt="No Items in Cart" />
              <h1>No items in cart!</h1>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSideBar;
