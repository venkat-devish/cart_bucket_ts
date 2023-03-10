import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import noItem from "../assets/shopping-basket.jpg";
import { CartCard } from "../organisms";

const CartSideBar = () => {
  const { isOpen, cartItems, cartQuantity, handleSideBar } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={handleSideBar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartQuantity > 0 ? (
            cartItems.map((el: any) => {
              return <CartCard key={el.id} item={el} />;
            })
          ) : (
            <div className="no-items d-flex-v">
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
