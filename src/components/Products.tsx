import { useShoppingCartData } from "../context/ShoppingCartContext";
import cartData from "../data/items.json";
import { Card } from "../organisms";
import "../styles/products.scss";

const Products = () => {
  const { totalCartItems } = useShoppingCartData();

  return (
    <div className="products">
      {cartData.map((item) => {
        return <Card key={item.id} {...item} itemQty={totalCartItems} />;
      })}
    </div>
  );
};

export default Products;
