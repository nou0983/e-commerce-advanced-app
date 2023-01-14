import { Button } from "../index.component";
import { formatPrice } from "../../utils/helper.utils";
import "./listView.styles.scss";

const ListView = ({ filteredProducts }) => {
  return (
    <ul className="product-list product-list--list">
      {filteredProducts.map((product) => {
        const { id, price, name, description, image } = product;

        return (
          <li key={id} className="product-list__item">
            <img src={image} alt={name} className="product-list__img" />
            <div className="product-list__info">
              <h2 className="heading-secondary">{name}</h2>
              <h5 className="product-list__price">{formatPrice(price)}</h5>
              <p className="product-list__description">
                {`${description.substring(0, 150)} ...`}
              </p>
              <Button url={`/products/${id}`}>details</Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ListView;
