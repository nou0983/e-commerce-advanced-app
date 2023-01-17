import { useState } from "react";
import { useCartContext } from "../../contexts/cartContext.context";
import { Colors, AmountButton, Button } from "../index.component";

const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const decreaseAmount = () => {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
  };

  const increaseAmount = () => {
    if (amount >= stock) {
      return;
    }
    setAmount(amount + 1);
  };

  const onClickHandler = () => {
    addToCart(id, amount, selectedColor, product);
  };

  return (
    <div className="add-btn-container">
      <Colors
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colors}
      />
      <AmountButton
        amount={amount}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
      />
      <Button url="/cart" type="checkout" onClickHandler={onClickHandler}>
        add to cart
      </Button>
    </div>
  );
};
export default AddToCart;
