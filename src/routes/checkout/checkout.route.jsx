import { PageHero } from "../../components/index.component";
import "./checkout.styles.scss";

const Checkout = () => {
  return (
    <main>
      <PageHero type="checkout" />
      <section className="section-checkout">Checkout</section>
    </main>
  );
};
export default Checkout;
