import { Button, ProductImages, Stars, AddToCart } from "../index.component";
import { formatPrice } from "../../utils/helper.utils";
import "./productContainer.styles.scss";

const ProductContainer = ({
  images,
  name,
  price,
  stock,
  stars,
  description,
  reviews,
  id,
  company,
  colors
}) => {
  return (
    <article className="single-product-container">
      <Button url="/products">back to products</Button>
      <div className="single-product-container__details">
        <ProductImages images={images} />
        <div className="single-product-container__info">
          <h2 className="heading-secondary">{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className="single-product-container__price">
            {formatPrice(price)}
          </h5>
          <p className="single-product-container__paragraph">{description}</p>
          <p className="single-product-container__paragraph">
            <span className="single-product-container__label">Available :</span>
            <span className="single-product-container__content">
              {stock <= 0 ? "out of stock" : stock}
            </span>
          </p>
          <p className="single-product-container__paragraph">
            <span className="single-product-container__label">SKU :</span>
            <span className="single-product-container__content">{id}</span>
          </p>
          <p className="single-product-container__paragraph single-product-container__paragraph--brand">
            <span className="single-product-container__label">Brand :</span>
            <span className="single-product-container__content">{company}</span>
          </p>
          {stock > 0 && <AddToCart stock={stock} colors={colors} id={id} />}
        </div>
      </div>
    </article>
  );
};

export default ProductContainer;
