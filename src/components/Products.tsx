import cartData from "../data/items.json";
import { Card } from "../organisms";
import "../styles/products.scss";

const Products = () => {
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
