import { Product } from "../index.component";
import './gridView.styles.scss';

const GridView = ({ filteredProducts }) => {
  return (
    <ul className="product-list product-list--grid">
      {filteredProducts.map((product) => {
        const { id } = product;
        return <Product key={id} {...product} />;
      })}
    </ul>
  );
};

export default GridView;
