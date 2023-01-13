import { createContext, useContext, useReducer } from "react";
import {
  PRODUCTS_ACITON_TYPE,
  INITIAL_PRODUCTS_STATE,
  productsReducer,
} from "../reducers/productsReducer.reducer";
import { createAction } from "../utils/createAtion.utils";
import axios from "axios";
import { PRODUCTS_URL, SINGLE_PRODUCT_URL } from "../utils/constants.utils";
import { useEffect } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_PRODUCTS_STATE);

  const fetchProducts = async () => {
    try {
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCTS_LOADING, true));

      const response = await axios(PRODUCTS_URL);
      const products = response.data;
      const newProducts = {
        all: products,
        featured: products.filter((product) => product.featured === true),
      };
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCTS, newProducts));
    } catch (error) {
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCTS_ERROR, true));
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {      
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCT_LOADING, true));

      const response = await axios(SINGLE_PRODUCT_URL + productId);
      const product = response.data;
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCT, product));
    } catch (error) {
      dispatch(createAction(PRODUCTS_ACITON_TYPE.SET_PRODUCT_ERROR, true));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    ...state,
    fetchSingleProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
