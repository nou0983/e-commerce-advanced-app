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
  SORT_FILTERED_PRODUCTS: "SORT_FILTERED_PRODUCTS",
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
    default:
      throw new Error(`Unhandled type of ${type} in filterReducer`);
  }
};

export { INITIAL_FILTER_STATE, FILTER_ACTION_TYPE, filterReducer };
