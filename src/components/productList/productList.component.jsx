import { GridView, ListView } from "../index.component";
import { useFilterContext } from "../../contexts/filterContext.context";

const ProductList = () => {
  const { filteredProducts, viewMode } = useFilterContext();

  if (filteredProducts.length < 1) {
    return <h5>Sorry, no products matched your search ...</h5>
  }

  return viewMode === "grid" ? (
    <GridView filteredProducts={filteredProducts} />
  ) : (
    <ListView filteredProducts={filteredProducts} />
  );
};

export default ProductList;
