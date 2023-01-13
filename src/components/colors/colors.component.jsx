import { FaCheck } from "react-icons/fa";
import "./colors.styles.scss";

const Colors = ({ colors = [], setSelectedColor, selectedColor }) => {
  return (
    <p className="single-product-container__paragraph single-product-container__color-container">
      <span className="single-product-container__label">colors :</span>
      {colors.map((color, index) => {
        return (
          <span
            key={index}
            className={`single-product-container__color ${
              color === selectedColor &&
              "single-product-container__color--main"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {selectedColor === color && <FaCheck />}
          </span>
        );
      })}
    </p>
  );
};

export default Colors;
