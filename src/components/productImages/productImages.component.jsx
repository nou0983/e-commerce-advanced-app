import { useState } from "react";
import "./productImages.styles.scss";

const ProductImages = ({ images = [{ url: "", id: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="single-product-container__image-container">
      <img
        src={mainImage.url}
        alt={mainImage.id}
        className="single-product-container__img-main"
      />
      <ul className="single-product-container__img-list">
        {images.map((img, index) => {
          const { id, url } = img;

          return (
            <li
              key={id}
              className="single-product-container__img-item"
              onClick={() => setMainImage(img)}
            >
              <img
                src={url}
                alt={id}
                className={`single-product-container__img-sub ${
                  mainImage.id === id &&
                  "single-product-container__img-sub--border"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductImages;
