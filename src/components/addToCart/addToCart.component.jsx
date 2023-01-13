import { useState } from "react";
import { Colors, AmountButton, Button } from "../index.component";

const AddToCart = ({ id, colors, stock }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

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
      <Button url="/cart">add to cart</Button>
    </div>
  );
};
export default AddToCart;
