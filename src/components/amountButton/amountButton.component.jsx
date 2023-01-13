import { FaPlus, FaMinus } from "react-icons/fa";
import './amountButton.styles.scss';

const AmountButton = ({ amount, decreaseAmount, increaseAmount }) => {
  return (
    <p className="single-product-container__paragraph single-product-container__paragraph--amount">
      <button className="single-product-container__btn-amount">
        <FaMinus onClick={decreaseAmount} />
      </button>
      <span className="single-product-container__amount">{amount}</span>
      <button className="single-product-container__btn-amount">
        <FaPlus onClick={increaseAmount} />
      </button>
    </p>
  );
};

export default AmountButton;
