import { createContext, useContext, useReducer } from "react";
import {
  PRODUCTS_ACITON_TYPE,
  INITIAL_PRODUCTS_STATE,
  productsReducer,
} from "../reducers/productsReducer.reducer";
import { createAction } from "../utils/createAtion.utils";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_PRODUCTS_STATE);
  const { isSidebarOpen } = state;

  const toggleSidebar = () => {
    dispatch(
      createAction(PRODUCTS_ACITON_TYPE.TOGGLE_SIDE_BAR, !isSidebarOpen)
    );
  };

  const value = {
    ...state,
    toggleSidebar,
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
