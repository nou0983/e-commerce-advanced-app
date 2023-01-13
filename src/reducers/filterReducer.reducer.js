const INITIAL_FILTER_STATE = {
  allProducts: [],
  filteredProducts: []
};

const FILTER_ACTION_TYPE = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
};

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTION_TYPE.LOAD_PRODUCTS:
      return { ...state, allProducts: [...payload], filterReducer: [...payload] };
    default:
      throw new Error(`Unhandled type of ${type} in filterReducer`);
  }
};

export { INITIAL_FILTER_STATE, FILTER_ACTION_TYPE, filterReducer };
