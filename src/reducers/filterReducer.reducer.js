const INITIAL_FILTER_STATE = {
  allProducts: [],
  filteredProducts: [],
  viewMode: "grid",
  sort: "price (lowest)",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

const FILTER_ACTION_TYPE = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_VIEW_MODE: "SET_VIEW_MODE",
  SET_SORT: "SET_SORT",
  SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
  SET_SORTED_PRODUCTS: "SET_SORTED_PRODUCTS",
  UPDATE_FILTERS: "UPDATE_FILTERS",
  CLEAR_FILTERS: "CLEAR_FILTERS",
};

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPE.LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...payload.products],
        filteredProducts: [...payload.products],
        filters: {
          ...state.filters,
          maxPrice: payload.maxPrice,
          minPrice: payload.minPrice,
          price: payload.price,
        },
      };
    case FILTER_ACTION_TYPE.SET_VIEW_MODE:
      return { ...state, viewMode: payload };
    case FILTER_ACTION_TYPE.SET_SORT:
      return {
        ...state,
        sort: payload,
      };
    case FILTER_ACTION_TYPE.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: payload,
      };

    case FILTER_ACTION_TYPE.UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload.newFilter,
        },
      };
    case FILTER_ACTION_TYPE.CLEAR_FILTERS:
      return {
        ...state,
        filters: payload,
      };
    case FILTER_ACTION_TYPE.SET_SORTED_PRODUCTS:   
      let newFilteredProducts = [...state.filteredProducts];

      if (state.sort === "price (lowest)") {
        newFilteredProducts = newFilteredProducts.sort(
          (a, b) => a.price - b.price
        );
      } else if (state.sort === "price (highest)") {
        newFilteredProducts = newFilteredProducts.sort(
          (a, b) => b.price - a.price
        );
      } else if (state.sort === "name (a to z)") {
        newFilteredProducts = newFilteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.sort === "name (z to a)") {
        newFilteredProducts = newFilteredProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        filteredProducts: newFilteredProducts,
      };
    default:
      throw new Error(`Unhandled type of ${type} in filterReducer`);
  }
};

export { INITIAL_FILTER_STATE, FILTER_ACTION_TYPE, filterReducer };
