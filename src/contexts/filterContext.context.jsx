import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import {
  INITIAL_FILTER_STATE,
  FILTER_ACTION_TYPE,
  filterReducer,
} from "../reducers/filterReducer.reducer";
import { createAction } from "../utils/createAtion.utils";
import { useProductsContext } from "./productsContext.context";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_FILTER_STATE);
  const { products } = useProductsContext();
  const { allProducts, filteredProducts, sort } = state;

  useEffect(() => {
    dispatch(createAction(FILTER_ACTION_TYPE.LOAD_PRODUCTS, products));
  }, [products]);

  useEffect(() => {
    setFilteredProducts();
  }, [allProducts, sort]);

  const toggleViewMode = (mode) => {
    dispatch(createAction(FILTER_ACTION_TYPE.SET_VIEW_MODE, mode));
  };

  const toggleSort = (e) => {
    const type = e.target.value;
    dispatch(createAction(FILTER_ACTION_TYPE.SET_SORT, type));
  };

  const setFilteredProducts = () => {
    let newFilteredProducts = [...allProducts];

    if (sort === "price (lowest)") {
      newFilteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price (highest)") {
      newFilteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "name (a to z)") {
      newFilteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sort === "name (z to a)") {
      newFilteredProducts = filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    dispatch(
      createAction(
        FILTER_ACTION_TYPE.SET_FILTERED_PRODUCTS,
        newFilteredProducts
      )
    );
  };

  const value = {
    ...state,
    toggleViewMode,
    toggleSort,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
