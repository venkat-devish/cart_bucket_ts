import storeItems from "../data/items.json";
import "../styles/store.scss";
import { Card } from "../organisms";

const Store = () => {
  return (
    <>
      <div className="store__container">
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
    </>
  );
};

export default Store;
