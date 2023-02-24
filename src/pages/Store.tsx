import storeItems from "../data/items.json";
import Card from "../organisms/Card";

import "../../public/imgs/car.jpg";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      {storeItems.map((el) => (
        <Card
          key={el.id}
          id={el.id}
          img={el.imgUrl}
          price={el.price}
          name={el.name}
        />
      ))}
    </div>
  );
};

export default Store;
