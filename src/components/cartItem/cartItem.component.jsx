import { formatPrice } from "../../utils/helper.utils";
import { AmountButton } from "../index.component";
import { FaTrash } from "react-icons/fa";
import "./cartItem.styles.scss";

const CartItem = ({ image, name, color, amount, price }) => {
  return (
    <article>
      <div className="section-cart__image-box">
        <img src={image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>
            color:{" "}
            <span
              style={{ backgroundColor: color }}
              className="section-cart__color"
            ></span>
          </p>
        </div>
      </div>
      <div>{formatPrice(price)}</div>
      <AmountButton amount={amount} />
      <div className="section-cart__total-box">
        {formatPrice(amount * price)}{" "}
        <span className="section-cart__remove-container">
          <FaTrash />
        </span>
      </div>
    </article>
  );
};
export default CartItem;
