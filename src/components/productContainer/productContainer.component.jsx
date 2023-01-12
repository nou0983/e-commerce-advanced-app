import { Button } from "../index.component";
import { formatPrice } from "../../utils/helper.utils";
import "./productContainer.styles.scss";

const ProductContainer = ({
  images,
  name,
  price,
  stock,
  start,
  description,
  reviews,
  id,
  company,
}) => {
  return (
    <article className="single-product-container">
      <Button url="/products">back to products</Button>
      <div className="single-product-container__details">
        <div className="single-product-container__image-container">
          <img
            src={"A"}
            alt={name}
            className="single-product-container__img-main"
          />
        </div>
        <div className="single-product-container__info">
          <h2 className="heading-secondary">{name}</h2>
          <h5 className="single-product-container__price">
            {formatPrice(price)}
          </h5>
          <p className="single-product-container-description">{description}</p>
          <p className="single-product-container__stock">
            <span className="single-product-container__stock-label">
              Available :
            </span>
            <span className="single-product-container__stock-amount">
              {stock <= 0 ? "out of stock" : stock}
            </span>
          </p>
          <p className="single-product-container__code">
            <span className="single-product-container__code-label">
              SKU :
            </span>
            <span className="single-product-container__code-number">
              {id}
            </span>
          </p>
          <p className="single-product-container__brand">
            <span className="single-product-container__brand-label">
              Brand :
            </span>
            <span className="single-product-container__brand-name">
              {company}
            </span>
          </p>       
        </div>
      </div>
    </article>
  );
};

export default ProductContainer;
