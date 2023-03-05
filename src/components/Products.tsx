import { useShoppingCart } from "../context/ShoppingCartContext";
import cartData from "../data/items.json";
import { Card } from "../organisms";
import "../styles/products.scss";
import CartSideBar from "./CartSideBar";

const Products = () => {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      <div className="products">
        {cartData.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
