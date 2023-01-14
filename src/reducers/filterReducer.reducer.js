const INITIAL_FILTER_STATE = {
  allProducts: [],
  filteredProducts: [],
  viewMode: "grid",
};

const FILTER_ACTION_TYPE = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_VIEW_MODE: "SET_VIEW_MODE",
};

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPE.LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...payload],
        filteredProducts: [...payload],
      };
    case FILTER_ACTION_TYPE.SET_VIEW_MODE:
      return { ...state, viewMode: payload };
    default:
      throw new Error(`Unhandled type of ${type} in filterReducer`);
  }
};

export { INITIAL_FILTER_STATE, FILTER_ACTION_TYPE, filterReducer };
