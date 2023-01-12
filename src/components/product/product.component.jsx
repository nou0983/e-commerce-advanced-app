import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../../utils/helper.utils";
import "./product.styles.scss";

const Product = ({ id, image, name, price }) => {
  return (
    <li className="product">
      <div className="product__image-container">
        <img src={image} alt={name} className="product__img" />
        <Link to={`/products/${id}`} className="product__icon-container">
          <FaSearch className="product__icon" />
        </Link>
      </div>

      <div className="product__details">
        <span className="product__title">{name}</span>
        <span className="product__price">AUD {formatPrice(price)}</span>
      </div>
    </li>
  );
};
export default Product;
