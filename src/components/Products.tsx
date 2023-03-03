import cartData from "../data/items.json";
import { Card } from "../organisms";
import "../styles/products.scss";

const Products = () => {
  return (
    <div className="products">
      {cartData.map((item) => {
        return <Card img={item.imgUrl} />;
      })}
    </div>
  );
};

export default Products;
