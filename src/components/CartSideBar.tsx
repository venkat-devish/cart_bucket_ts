import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import cartData from "../data/items.json";

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
          <div className="drawer">
            <div className="drawer__img">
              <img src={cartData[2].imgUrl} alt="" />
            </div>
            <div className="drawer__info">
              <div className="drawer__info-qty">
                <h5>Banana</h5>
                <span>x2</span>
              </div>
              <div className="drawer__info-qty">
                <h5>Price</h5>
                <span>$ 500</span>
              </div>
              <div className="drawer__actions">
                <div className="card__actions">
                  <button className="card__btn card__btn-2">+</button>
                  <button className="card__btn card__btn-2 decrease">-</button>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSideBar;
