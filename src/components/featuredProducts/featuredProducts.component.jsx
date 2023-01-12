import { Spinner } from "../index.component";
import { Product } from "../index.component";
import { Error } from "../index.component";
import { Button } from "../index.component";
import { useProductsContext } from "../../contexts/productsContext.context";
import "./featuredProducts.styles.scss";

const FeaturedProducts = () => {
  const { featuredProducts, productsLoading, productsError } =
    useProductsContext();

  return (
    <section className="section-featured">
      <article className="section-featured__container">
        <h2 className="heading-secondary">featured products</h2>
        <hr />
        {productsLoading ? (
          <Spinner />
        ) : productsError ? (
          <Error />
        ) : (
          <>
            <ul className="section-featured__product-container">
              {featuredProducts.slice(0).map((featuredProduct) => {
                return (
                  <Product key={featuredProduct.id} {...featuredProduct} />
                );
              })}
            </ul>
            <Button url="products">all products</Button>
          </>
        )}
      </article>
    </section>
  );
};
export default FeaturedProducts;
