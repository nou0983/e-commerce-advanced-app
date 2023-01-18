import { PageHero, CartContent } from "../../components/index.component";
import "./cart.styles.scss";

const Cart = () => {
  return (
    <section className="section-cart">
      <PageHero type="cart" />
      <CartContent />
    </section>
  );
};
export default Cart;
