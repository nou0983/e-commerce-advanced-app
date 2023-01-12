import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../../contexts/productsContext.context";
import {
  Error,
  PageHero,
  Spinner,
  ProductContainer,
} from "../../components/index.component";
import "./singleProduct.styles.scss";

const SingleProduct = () => {
  const { productError, productLoading, product, fetchSingleProduct } =
    useProductsContext();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);

  useEffect(() => {
    let clearId;
    if (productError) {
      clearId = setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    return () => clearTimeout(clearId);
  }, [productError]);

  return (
    <section className="section-product">
      {productLoading ? (
        <Spinner />
      ) : productError ? (
        <Error />
      ) : (
        <>
          <PageHero type={product.name} product={true} />
          <ProductContainer {...product} />
        </>
      )}
    </section>
  );
};
export default SingleProduct;
