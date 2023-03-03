import Banana from "../../public/imgs/banana.jpg";
import "../styles/card.scss";

type CardType = {
  img: string;
};

const Card = ({ img }: CardType) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="Image" />
      </div>
      <div className="card__details">
        <p>Content</p>
        <p>Content</p>
      </div>
    </div>
  );
};

export default Card;
