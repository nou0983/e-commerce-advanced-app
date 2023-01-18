import { Button, CartItem, CartTotal } from "../index.component";
import { useCartContext } from "../../contexts/cartContext.context";
import "./cartContent.styles.scss";

const CartContent = () => {
  const { cart, clearCart, totalAmount, totalItems, shippingFee } =
    useCartContext();

  return (
    <article className="section-cart__container">
      <div className="section-cart__header">
        <span>item</span>
        <span>price</span>
        <span>quantity</span>
        <span>subtotal</span>
      </div>
      <div className="section-cart__body">
        {cart.length < 1 ? (
          <div className="section-cart__empty">
            <p className="section-cart__text">your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => <CartItem key={item.id} {...item} />)
        )}
      </div>
      <div className="section-cart__footer">
        <Button url="/products">continue shopping</Button>
        <button type="button" className="section-cart__btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotal
        totalAmount={totalAmount}
        totalItems={totalItems}
        shippingFee={shippingFee}
      />
    </article>
  );
};
export default CartContent;
