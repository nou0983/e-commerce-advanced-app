import { formatPrice } from "../../utils/helper.utils";
import { Button } from "../index.component";
import { useAuth0 } from "@auth0/auth0-react";
import "./cartTotal.styles.scss";

const CartTotal = ({ totalItems, total, shippingFee }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="section-cart__total-container">
      <div className="section-cart__total-content">
        <p className="section-cart__total-items">
          <span className="section-cart__label">total items</span> {totalItems}
        </p>
        <p className="section-cart__sub-total">
          <span className="section-cart__label">subtotal</span>
          {formatPrice(total)}
        </p>
        <p className="section-cart__shipping">
          <span className="section-cart__label">shipping fee</span>
          {formatPrice(shippingFee)}
        </p>
        <p className="section-cart__total">
          <span className="section-cart__label">order total</span>
          {formatPrice(total + shippingFee)}
        </p>
      </div>

      {isAuthenticated ? (
        <Button url="/checkout">proceed to checkout</Button>
      ) : (
        <>
          <p className="section-cart__login-label">
            Please login fisrt to complete your purchase.
          </p>
          <Button type="user" onClickHandler={loginWithRedirect}>
            login
          </Button>
        </>
      )}
    </div>
  );
};
export default CartTotal;
