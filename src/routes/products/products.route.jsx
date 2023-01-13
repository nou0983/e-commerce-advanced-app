import {
  PageHero,
  Sort,
  Filters,
  ProductList,
} from "../../components/index.component";
import './products.styles.scss'

const Products = () => {
  return (
    <main>
      <PageHero type="products" />
      <section className="section-products">
        <Filters />
        <div className="section-products__container">
          <Sort />
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default Products;
