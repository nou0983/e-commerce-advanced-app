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
  const { allProducts, filteredProducts, sort, filters } = state;

  useEffect(() => {
    setDefaultFiltersProducts();
  }, [products]);

  useEffect(() => {
    sortProducts();
  }, [allProducts, sort, filters]);

  const setDefaultFiltersProducts = () => {
    const priceList = products.map((product) => {
      return product.price;
    });
    const maxPrice = Math.max(...priceList);
    const minPrice = Math.min(...priceList);
    const price = maxPrice;
    const payload = { products, maxPrice, minPrice, price };

    dispatch(createAction(FILTER_ACTION_TYPE.LOAD_PRODUCTS, payload));
  };

  const toggleViewMode = (mode) => {
    dispatch(createAction(FILTER_ACTION_TYPE.SET_VIEW_MODE, mode));
  };

  const toggleSort = (e) => {
    const type = e.target.value;
    dispatch(createAction(FILTER_ACTION_TYPE.SET_SORT, type));
  };

  const sortProducts = () => {
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

  const updateFilters = (e) => {
    console.log("updating products");
    const newFilteredProducts = filteredProducts;
    const name = e.target.name;
    let value;

    if (name === "category") {
      value = e.target.textContent;
    } else if (name === "color") {
      value = e.target.dataset.color;
    } else if (name === "price") {
      value = Number(e.target.value);
    } else if (name === "shipping") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    const newFilter = {
      [name]: value,
    };
    console.log(newFilter);
    dispatch(
      createAction(FILTER_ACTION_TYPE.UPDATE_FILTERS, {
        newFilteredProducts,
        newFilter,
      })
    );
  };

  const clearFilters = () => {
    const payload = {
      ...filters,
      text: "",
      category: "all",
      company: "all",
      color: "all",   
      price: filters.maxPrice,
      shipping: false,
    };

    dispatch(createAction(FILTER_ACTION_TYPE.CLEAR_FILTERS, payload));
  };

  const value = {
    ...state,
    toggleViewMode,
    toggleSort,
    clearFilters,
    updateFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
