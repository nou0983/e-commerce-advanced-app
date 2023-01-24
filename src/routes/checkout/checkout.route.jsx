import {
  PageHero,
  StripeCheckout,
  Button,
} from "../../components/index.component";
import { useCartContext } from "../../contexts/cartContext.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero type="checkout" />
      <section className="section-checkout">
        {cart.length < 1 ? (
          <div className="section-checkout__empty">
            <p className="section-checkout__text">your cart is empty</p>
            <Button url="/products">go to products</Button>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </section>
    </main>
  );
};
export default Checkout;
