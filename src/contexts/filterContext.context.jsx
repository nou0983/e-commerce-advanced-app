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
  const [ state, dispatch ] = useReducer(filterReducer, INITIAL_FILTER_STATE);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch(createAction(FILTER_ACTION_TYPE.LOAD_PRODUCTS, products));
  }, [products]);

  const value = {
    ...state,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
