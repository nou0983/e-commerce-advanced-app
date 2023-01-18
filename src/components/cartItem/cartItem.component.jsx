import { formatPrice } from "../../utils/helper.utils";
import { AmountButton } from "../index.component";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../contexts/cartContext.context";
import "./cartItem.styles.scss";

const CartItem = ({ id, image, name, color, amount, price, stock }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const decreaseHandler = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      toggleAmount(id, newAmount);
    } else {
      removeItem(id);
    }
  };

  const increaseHandler = () => {
    if (amount < stock) {
      const newAmount = amount + 1;
      toggleAmount(id, newAmount);
    }
  };

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
      <AmountButton
        amount={amount}
        decreaseAmount={decreaseHandler}
        increaseAmount={increaseHandler}
      />
      <div className="section-cart__total-box">
        {formatPrice(amount * price)}
        <span
          className="section-cart__remove-container"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </span>
      </div>
    </article>
  );
};
export default CartItem;
